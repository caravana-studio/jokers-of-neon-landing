import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Skeleton,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Contract, RpcProvider, type Abi } from "starknet";
import { I18nLanguageSwitcher } from "./Components/I18nLanguageSwitcher";
import {
  BACKGROUND_BLUE,
  BLUE,
  BLUE_LIGHT,
  DIAMONDS,
  GREY_LINE,
  GREEN_LIGHT,
  VIOLET_LIGHT,
} from "./theme/colors";

// Starknet NFT Contract Configuration
const NFT_CONTRACT_ADDRESS = "0x04dDbBAb7Aa237C1b73c931B6F836dEd6036f5E12D4898FccdCDe81D494f7956";
const STARKNET_RPC_URL = "https://api.cartridge.gg/x/starknet/mainnet";

// Minimal ABI for get_total_supply function
const NFT_ABI: Abi = [
  {
    name: "get_total_supply",
    type: "function",
    inputs: [],
    outputs: [{ name: "total_supply", type: "core::integer::u256" }],
    state_mutability: "view",
  },
];

// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_GAME_API_URL ||
  import.meta.env.VITE_API_URL ||
  "https://jokers-of-neon-api-zf1x.onrender.com";
const STATS_API_BASE_URL =
  import.meta.env.VITE_STATS_API_URL ||
  import.meta.env.VITE_ANALYTICS_API_URL ||
  API_BASE_URL;
const API_KEY = import.meta.env.VITE_GAME_API_KEY || import.meta.env.VITE_API_KEY || "";
const STATS_API_KEY = import.meta.env.VITE_STATS_API_KEY || "";

// Types
interface GlobalStats {
  total_transactions: number;
  total_games: number;
  total_unique_players: number;
}

interface TimeSeriesData {
  period: string;
  value: number;
}

type MetricType = "transactions" | "games" | "players";
type ChainFilter = "all" | "starknet" | "celo";
type Granularity = "hour" | "day" | "week" | "month";
type TimeRange = "1D" | "1W" | "1M" | "1Y" | "all";
const ALL_STATS_START_DATE = "2025-12-01";

interface AnalyticsMetric {
  blockchain?: string;
  tx_count?: number | string;
  game_count?: number | string;
  player_count?: number | string;
  total_transactions?: number | string;
  total_games?: number | string;
  total_unique_players?: number | string;
}

interface AnalyticsSummary {
  blockchain?: string;
  total?: AnalyticsMetric;
  chains?: AnalyticsMetric[];
}

interface AnalyticsPoint extends AnalyticsMetric {
  day?: string;
  period?: string;
  periodo?: string;
}

interface AnalyticsTimeseries {
  blockchain?: string;
  points?: AnalyticsPoint[];
}

// Animations
const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(32, 198, 237, 0.4),
                0 0 40px rgba(32, 198, 237, 0.2),
                inset 0 0 20px rgba(32, 198, 237, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(32, 198, 237, 0.6),
                0 0 60px rgba(32, 198, 237, 0.3),
                inset 0 0 30px rgba(32, 198, 237, 0.15);
  }
`;

const numberFlicker = keyframes`
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.8; }
  94% { opacity: 1; }
  96% { opacity: 0.9; }
  97% { opacity: 1; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glowPulse = keyframes`
  0%, 100% { filter: drop-shadow(0 0 3px currentColor); }
  50% { filter: drop-shadow(0 0 8px currentColor); }
`;

// Color palette
const colors = {
  neonCyan: BLUE_LIGHT,
  neonViolet: VIOLET_LIGHT,
  neonBlue: BLUE,
  neonPink: DIAMONDS,
  neonGreen: GREEN_LIGHT,
  darkBg: BACKGROUND_BLUE,
  cardBg: "rgba(0, 0, 0, 0.3)",
  gridLine: "rgba(153, 153, 153, 0.18)",
};

const metricConfigBase: Record<MetricType, { labelKey: string; color: string; icon: string }> = {
  transactions: { labelKey: "stats.metrics.transactions", color: colors.neonCyan, icon: "💎" },
  games: { labelKey: "stats.metrics.games", color: colors.neonViolet, icon: "🃏" },
  players: { labelKey: "stats.metrics.players", color: colors.neonPink, icon: "👥" },
};
const chainConfigBase: Record<ChainFilter, { labelKey: string; color: string }> = {
  all: { labelKey: "stats.networks.all", color: colors.neonGreen },
  starknet: { labelKey: "stats.networks.starknet", color: colors.neonCyan },
  celo: { labelKey: "stats.networks.celo", color: colors.neonViolet },
};
const defaultMonthsShort = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// API fetch helper
const buildApiUrl = (baseUrl: string, endpoint: string) => {
  const normalizedBase = baseUrl.replace(/\/+$/, "");
  const normalizedEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${normalizedBase}${normalizedEndpoint}`;
};

const fetchJson = async (baseUrl: string, endpoint: string, apiKey?: string) => {
  const headers: HeadersInit = {};
  if (apiKey) headers["X-API-Key"] = apiKey;

  const response = await fetch(buildApiUrl(baseUrl, endpoint), {
    headers,
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const errorMessage =
      payload && typeof payload === "object" && "error" in payload
        ? String(payload.error)
        : "API request failed";
    throw new Error(errorMessage);
  }
  return payload;
};

const fetchGameApi = (endpoint: string) => fetchJson(API_BASE_URL, endpoint, API_KEY);
const fetchStatsApi = (endpoint: string) => fetchJson(STATS_API_BASE_URL, endpoint, STATS_API_KEY);

const unwrapData = (payload: unknown): unknown => {
  if (!payload || typeof payload !== "object") return payload;
  if ("success" in payload && (payload as { success?: boolean }).success === false) {
    const error = "error" in payload ? String((payload as { error?: unknown }).error) : "API request failed";
    throw new Error(error);
  }
  if ("data" in payload) return (payload as { data?: unknown }).data;
  return payload;
};

const toNumber = (value: unknown): number => {
  const numberValue = typeof value === "number" ? value : typeof value === "string" ? Number(value) : 0;
  return Number.isFinite(numberValue) ? numberValue : 0;
};

const getFirstNumber = (record: Record<string, unknown>, keys: string[]): number => {
  for (const key of keys) {
    if (record[key] !== undefined && record[key] !== null) {
      return toNumber(record[key]);
    }
  }
  return 0;
};

const normalizeGlobalStats = (payload: unknown): GlobalStats | null => {
  const data = unwrapData(payload);
  const stats = Array.isArray(data) ? data[0] : data;
  if (!stats || typeof stats !== "object") return null;

  const source =
    "total" in stats && (stats as AnalyticsSummary).total
      ? (stats as AnalyticsSummary).total
      : stats;

  if (!source || typeof source !== "object") return null;
  const record = source as Record<string, unknown>;

  return {
    total_transactions: getFirstNumber(record, ["total_transactions", "tx_count", "transactions"]),
    total_games: getFirstNumber(record, ["total_games", "game_count", "games"]),
    total_unique_players: getFirstNumber(record, ["total_unique_players", "player_count", "unique_players", "players"]),
  };
};

const hasGlobalStatsValues = (stats: GlobalStats | null) =>
  Boolean(stats && stats.total_transactions + stats.total_games + stats.total_unique_players > 0);

const hasAnalyticsSummaryRows = (payload: unknown) => {
  const data = unwrapData(payload);
  const chains = data && typeof data === "object" && "chains" in data ? (data as AnalyticsSummary).chains : null;
  return Boolean(Array.isArray(chains) && chains.length > 0);
};

const metricValueKeys: Record<MetricType, string[]> = {
  transactions: ["total_transactions", "tx_count", "transactions", "transaction_count", "value"],
  games: ["total_games", "game_count", "games", "value"],
  players: ["unique_players", "total_unique_players", "player_count", "players", "unique_player_count", "value"],
};

const getPeriodValue = (record: Record<string, unknown>): string => {
  const period = record.periodo ?? record.period ?? record.day ?? record.date ?? record.bucket;
  return typeof period === "string" ? period : "";
};

const parseDateOnly = (value: string): Date | null => {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return null;
  const [, year, month, day] = match;
  return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
};

const formatDateOnly = (date: Date) => date.toISOString().slice(0, 10);

const getAggregatedPeriod = (period: string, granularity: Granularity) => {
  if (granularity === "day" || granularity === "hour") return period.slice(0, 10);

  const date = parseDateOnly(period);
  if (!date) return period;

  if (granularity === "month") {
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-01`;
  }

  const day = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() - day + 1);
  return formatDateOnly(date);
};

const normalizeSeriesData = (
  payload: unknown,
  metric: MetricType,
  granularity: Granularity,
  aggregate = false
): TimeSeriesData[] => {
  const data = unwrapData(payload);
  const rows: unknown[] = Array.isArray(data)
    ? data
    : data && typeof data === "object" && Array.isArray((data as AnalyticsTimeseries).points)
      ? (data as AnalyticsTimeseries).points ?? []
      : [];

  const mappedRows = rows
    .map((row) => {
      if (!row || typeof row !== "object") return null;
      const record = row as Record<string, unknown>;
      const period = getPeriodValue(record);
      if (!period) return null;
      return {
        period: aggregate ? getAggregatedPeriod(period, granularity) : period,
        value: getFirstNumber(record, metricValueKeys[metric]),
      };
    })
    .filter((row): row is TimeSeriesData => Boolean(row));

  const aggregated = aggregate
    ? Array.from(
        mappedRows
          .reduce((acc, row) => acc.set(row.period, (acc.get(row.period) ?? 0) + row.value), new Map<string, number>())
          .entries()
      ).map(([period, value]) => ({ period, value }))
    : mappedRows;

  return aggregated.sort((a, b) => new Date(a.period).getTime() - new Date(b.period).getTime());
};

const sumSeries = (series: TimeSeriesData[]) => series.reduce((total, row) => total + row.value, 0);

const fetchLegacyMetricTotal = async (metric: MetricType, selectedChain: ChainFilter, endDate: string) => {
  const params = new URLSearchParams({
    granularity: "day",
    start_date: ALL_STATS_START_DATE,
    end_date: endDate,
  });
  if (selectedChain !== "all") params.set("blockchain", selectedChain);

  const response = await fetchGameApi(`/api/stats/${metric}?${params}`);
  return sumSeries(normalizeSeriesData(response, metric, "day"));
};

const fetchLegacyGlobalFromSeries = async (selectedChain: ChainFilter, endDate: string): Promise<GlobalStats> => {
  const [transactions, games, players] = await Promise.all(
    (["transactions", "games", "players"] as MetricType[]).map((metric) =>
      fetchLegacyMetricTotal(metric, selectedChain, endDate).catch(() => 0)
    )
  );

  return {
    total_transactions: transactions,
    total_games: games,
    total_unique_players: players,
  };
};

// Custom Neon Line Chart Component
const NeonLineChart = ({
  data,
  color,
  isLoading,
  granularity,
  noDataLabel,
  monthNames,
  formatNumber,
}: {
  data: TimeSeriesData[];
  color: string;
  isLoading: boolean;
  granularity: Granularity;
  noDataLabel: string;
  monthNames: string[];
  formatNumber: (value: number) => string;
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    value: number;
    period: string;
    isFirst: boolean;
    isLast: boolean;
    index: number;
  } | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || typeof ResizeObserver === "undefined") return;

    let frameId = 0;
    const updateSize = () => {
      const rect = svg.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setSvgSize((prev) => {
          if (prev.width === rect.width && prev.height === rect.height) {
            return prev;
          }
          return { width: rect.width, height: rect.height };
        });
      }
    };

    updateSize();
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateSize);
    });
    observer.observe(svg);
    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [data.length, isLoading]);

  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const chartHeight = 280;
  const chartWidth = 840;
  const paddingX = 16;
  const paddingY = 6;

  const pointScaleX = useMemo(() => {
    if (svgSize.width === 0 || svgSize.height === 0) return 1;
    const scaleX = svgSize.width / chartWidth;
    const scaleY = svgSize.height / chartHeight;
    if (!Number.isFinite(scaleX) || !Number.isFinite(scaleY) || scaleX === 0 || scaleY === 0) {
      return 1;
    }
    return scaleY / scaleX;
  }, [svgSize.height, svgSize.width]);

  if (isLoading) {
    return (
      <Box h="100%" display="flex" alignItems="center" justifyContent="center">
        <Spinner color={color} size="xl" />
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box h="100%" display="flex" alignItems="center" justifyContent="center">
        <Text color="whiteAlpha.500" fontFamily="Oxanium">
          {noDataLabel}
        </Text>
      </Box>
    );
  }

  // Calculate nice max for Y-axis scale
  const roundToNice = (value: number): number => {
    if (value <= 100) return Math.ceil(value / 10) * 10;
    if (value <= 500) return Math.ceil(value / 100) * 100;
    if (value <= 1000) return Math.ceil(value / 100) * 100;
    if (value <= 5000) return Math.ceil(value / 500) * 500;
    return Math.ceil(value / 1000) * 1000;
  };
  const niceMax = roundToNice(maxValue);

  // Generate path for the line chart
  const points = data.map((d, i) => ({
    x: paddingX + (i / (data.length - 1 || 1)) * (chartWidth - paddingX * 2),
    y: chartHeight - paddingY - (d.value / niceMax) * (chartHeight - paddingY * 2),
    value: d.value,
    period: d.period,
  }));

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaPath = `${linePath} L ${points[points.length - 1]?.x || paddingX} ${chartHeight - paddingY} L ${paddingX} ${chartHeight - paddingY} Z`;

  // Y-axis labels with round numbers
  const yLabels = [0, niceMax / 2, niceMax];

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (points.length === 0) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const relativeX = ((e.clientX - rect.left) / rect.width) * chartWidth;
    const clampedX = Math.max(paddingX, Math.min(chartWidth - paddingX, relativeX));

    let closestIndex = 0;
    let minDistance = Math.abs(points[0].x - clampedX);
    for (let i = 1; i < points.length; i += 1) {
      const distance = Math.abs(points[i].x - clampedX);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    const point = points[closestIndex];
    setTooltip({
      x: (point.x / chartWidth) * rect.width,
      y: (point.y / chartHeight) * rect.height,
      value: point.value,
      period: point.period,
      isFirst: closestIndex === 0,
      isLast: closestIndex === points.length - 1,
      index: closestIndex,
    });
  };

  const handleMouseLeave = () => setTooltip(null);

  const formatPeriodLabel = (period: string) => {
    // Handle hourly format: "2025-01-22T14:00:00"
    if (granularity === "hour") {
      const match = period.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
      if (match) {
        const [, year, month, day, hour] = match;
        const monthIndex = Number(month) - 1;
        return `${monthNames[monthIndex]} ${day}, ${year} ${hour}:00`;
      }
      return period;
    }

    // Handle month format
    if (granularity === "month") {
      const match = period.match(/^(\d{4})-(\d{2})/);
      if (!match) return period;
      const year = Number(match[1]);
      const monthIndex = Number(match[2]) - 1;
      if (Number.isNaN(year) || Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
        return period;
      }
      return `${monthNames[monthIndex]} ${year}`;
    }

    const dayMatch = period.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (dayMatch) {
      const [, year, month, day] = dayMatch;
      const monthIndex = Number(month) - 1;
      if (!Number.isNaN(monthIndex) && monthIndex >= 0 && monthIndex < 12) {
        return `${monthNames[monthIndex]} ${day}, ${year}`;
      }
    }

    return period;
  };

  return (
    <Box position="relative" h="100%" w="100%">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%", cursor: "crosshair" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
          <filter id="chart-glow">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`h-${i}`}
            x1={paddingX}
            y1={paddingY + (i * (chartHeight - paddingY * 2)) / 4}
            x2={chartWidth - paddingX}
            y2={paddingY + (i * (chartHeight - paddingY * 2)) / 4}
            stroke={colors.gridLine}
            strokeWidth="0.2"
          />
        ))}

        {/* Vertical grid lines for weeks */}
        {data.map((_, i) => (
          <line
            key={`v-${i}`}
            x1={paddingX + (i / (data.length - 1 || 1)) * (chartWidth - paddingX * 2)}
            y1={paddingY}
            x2={paddingX + (i / (data.length - 1 || 1)) * (chartWidth - paddingX * 2)}
            y2={chartHeight - paddingY}
            stroke={colors.gridLine}
            strokeWidth="0.1"
          />
        ))}

        {/* Area fill */}
        <path d={areaPath} fill="url(#chart-gradient)" />

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth="0.6"
          filter="url(#chart-glow)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Hover line */}
        {tooltip && (
          <line
            x1={points[tooltip.index].x}
            x2={points[tooltip.index].x}
            y1={paddingY}
            y2={chartHeight - paddingY}
            stroke={color}
            strokeOpacity="0.35"
            strokeWidth="0.35"
            strokeDasharray="1 1.5"
          />
        )}

        {/* Data points with hover areas */}
        {points.map((p, i) => {
          const pointTransform =
            pointScaleX === 1
              ? undefined
              : `translate(${p.x} ${p.y}) scale(${pointScaleX} 1) translate(${-p.x} ${-p.y})`;

          return (
            <g key={i}>
              {/* Invisible larger hit area */}
              <circle
                cx={p.x}
                cy={p.y}
                r="5"
                fill="transparent"
                pointerEvents="none"
                transform={pointTransform}
              />
              {/* Soft circular halo without blur distortion */}
              <circle
                cx={p.x}
                cy={p.y}
                r="4.1"
                fill={color}
                fillOpacity="0.16"
                pointerEvents="none"
                transform={pointTransform}
              />
              {/* Core point */}
              <circle
                cx={p.x}
                cy={p.y}
                r="2.4"
                fill={color}
                pointerEvents="none"
                transform={pointTransform}
              />
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <Box
          position="absolute"
          left={`${tooltip.x}px`}
          top={`${tooltip.y}px`}
          transform={`translate(${tooltip.isFirst ? "0" : tooltip.isLast ? "-100%" : "-50%"}, -100%) translateY(-8px)`}
          bg="rgba(0, 0, 0, 0.95)"
          border="1px solid"
          borderColor={color}
          borderRadius="md"
          px={3}
          py={2}
          zIndex={1000}
          pointerEvents="none"
          boxShadow={`0 0 15px ${color}50`}
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-6px",
            left: tooltip.isFirst ? "8px" : tooltip.isLast ? "calc(100% - 14px)" : "50%",
            transform: tooltip.isFirst || tooltip.isLast ? "none" : "translateX(-50%)",
            borderWidth: "6px",
            borderStyle: "solid",
            borderColor: `${color} transparent transparent transparent`,
          }}
        >
          <Text fontFamily="Orbitron" fontSize="md" color={color} fontWeight="bold">
            {formatNumber(tooltip.value)}
          </Text>
          <Text fontFamily="Oxanium" fontSize="sm" color="whiteAlpha.700">
            {formatPeriodLabel(tooltip.period)}
          </Text>
        </Box>
      )}

      {/* Y-axis labels */}
      <Box
        position="absolute"
        left="0"
        top="0"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        py={3}
        pl={2}
        pointerEvents="none"
      >
        {yLabels.reverse().map((val, i) => (
          <Text key={i} fontSize="xs" color="whiteAlpha.500" fontFamily="Oxanium">
            {formatNumber(val)}
          </Text>
        ))}
      </Box>

    </Box>
  );
};

// Stat Card Component
const StatCard = ({
  title,
  value,
  color,
  delay,
  isLoading,
  formatNumber,
}: {
  title: string;
  value: number;
  color: string;
  delay: number;
  isLoading: boolean;
  formatNumber: (value: number) => string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isLoading || value === 0) {
      setDisplayValue(0);
      return;
    }

    const duration = 650;
    const steps = 26;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setDisplayValue(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isLoading]);

  return (
    <Box
      position="relative"
      bg={colors.cardBg}
      borderRadius="lg"
      p={{ base: 3, md: 4 }}
      border="1px solid"
      borderColor={`${color}40`}
      animation={`${pulseGlow} 3s ease-in-out infinite, ${fadeInUp} 0.6s ease-out ${delay}s both`}
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
      }}
      _hover={{
        transform: "translateY(-2px)",
        borderColor: `${color}80`,
      }}
      transition="all 0.3s ease"
    >
      {/* Corner decorations */}
      <Box
        position="absolute"
        top={2}
        right={2}
        w="20px"
        h="20px"
        borderTop="2px solid"
        borderRight="2px solid"
        borderColor={color}
        opacity={0.5}
      />
      <Box
        position="absolute"
        bottom={2}
        left={2}
        w="20px"
        h="20px"
        borderBottom="2px solid"
        borderLeft="2px solid"
        borderColor={color}
        opacity={0.5}
      />

      <VStack spacing={2} align="center">
        <Text
          fontFamily="Orbitron"
          fontSize="sm"
          color="whiteAlpha.700"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          {title}
        </Text>
        {isLoading ? (
          <Skeleton height="40px" width="120px" startColor={`${color}20`} endColor={`${color}40`} />
        ) : (
          <Text
            fontFamily="Orbitron"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="white"
            animation={`${numberFlicker} 4s infinite`}
            textShadow={`0 0 20px ${color}, 0 0 40px ${color}80`}
          >
            {formatNumber(displayValue)}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

// Main Stats Page Component
export const StatsPage = () => {
  const { t, i18n } = useTranslation("landing");
  const [globalStats, setGlobalStats] = useState<GlobalStats | null>(null);
  const [chartData, setChartData] = useState<TimeSeriesData[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<MetricType>("transactions");
  const [selectedChain, setSelectedChain] = useState<ChainFilter>("all");
  const [timeRange, setTimeRange] = useState<TimeRange>("all");
  const [granularity, setGranularity] = useState<Granularity>("day");
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(true);
  const [isLoadingChart, setIsLoadingChart] = useState(true);
  const [mintedCards, setMintedCards] = useState<number>(0);
  const [isLoadingMinted, setIsLoadingMinted] = useState(true);
  const locale = useMemo(() => {
    const languageCode = (i18n.resolvedLanguage ?? "en").slice(0, 2);
    if (languageCode === "es") return "es-ES";
    if (languageCode === "pt") return "pt-BR";
    return "en-US";
  }, [i18n.resolvedLanguage]);
  const formatNumber = useCallback((value: number) => value.toLocaleString(locale), [locale]);
  const monthNames = useMemo(() => {
    const translatedMonths = t("stats.monthsShort", { returnObjects: true }) as unknown;
    if (!Array.isArray(translatedMonths)) return defaultMonthsShort;
    if (translatedMonths.length !== 12) return defaultMonthsShort;
    return translatedMonths.map((month) => String(month).toUpperCase());
  }, [t]);
  const metricConfig = useMemo(
    () =>
      ({
        transactions: {
          ...metricConfigBase.transactions,
          label: t(metricConfigBase.transactions.labelKey),
        },
        games: {
          ...metricConfigBase.games,
          label: t(metricConfigBase.games.labelKey),
        },
        players: {
          ...metricConfigBase.players,
          label: t(metricConfigBase.players.labelKey),
        },
      }) as Record<MetricType, { labelKey: string; label: string; color: string; icon: string }>,
    [t]
  );
  const chainConfig = useMemo(
    () =>
      ({
        all: {
          ...chainConfigBase.all,
          label: t(chainConfigBase.all.labelKey),
        },
        starknet: {
          ...chainConfigBase.starknet,
          label: t(chainConfigBase.starknet.labelKey),
        },
        celo: {
          ...chainConfigBase.celo,
          label: t(chainConfigBase.celo.labelKey),
        },
      }) as Record<ChainFilter, { labelKey: string; label: string; color: string }>,
    [t]
  );

  // Calculate date range based on selected time range
  const dateRange = useMemo(() => {
    const today = new Date();
    let endDate = today.toISOString().split("T")[0];
    let startDate: string;

    switch (timeRange) {
      case "1D": {
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        startDate = yesterday.toISOString().split("T")[0];
        // endDate = startDate;
        break;
      }
      case "1W": {
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 7);
        startDate = weekAgo.toISOString().split("T")[0];
        break;
      }
      case "1M": {
        const monthAgo = new Date(today);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        startDate = monthAgo.toISOString().split("T")[0];
        break;
      }
      case "1Y": {
        const yearAgo = new Date(today);
        yearAgo.setFullYear(yearAgo.getFullYear() - 1);
        startDate = yearAgo.toISOString().split("T")[0];
        break;
      }
      case "all":
      default:
        startDate = ALL_STATS_START_DATE;
        break;
    }

    return { startDate, endDate };
  }, [timeRange]);

  // Fetch global stats
  useEffect(() => {
    const fetchGlobalStats = async () => {
      setIsLoadingGlobal(true);
      try {
        const analyticsParams = new URLSearchParams({ blockchain: selectedChain });

        try {
          const analyticsResponse = await fetchStatsApi(`/api/analytics/summary?${analyticsParams}`);
          const analyticsStats = normalizeGlobalStats(analyticsResponse);
          if (analyticsStats && (selectedChain === "celo" || hasGlobalStatsValues(analyticsStats) || hasAnalyticsSummaryRows(analyticsResponse))) {
            setGlobalStats(analyticsStats);
            return;
          }
        } catch {
          // Analytics endpoints are optional while deployments migrate; legacy stats remain the fallback.
        }

        if (selectedChain === "celo") {
          setGlobalStats({ total_transactions: 0, total_games: 0, total_unique_players: 0 });
          return;
        }

        const legacyParams = new URLSearchParams();
        if (selectedChain !== "all") legacyParams.set("blockchain", selectedChain);
        const legacyEndpoint = `/api/stats/global${legacyParams.toString() ? `?${legacyParams}` : ""}`;
        const endDate = new Date().toISOString().split("T")[0];
        const legacyGlobalPromise = fetchGameApi(legacyEndpoint)
          .then(normalizeGlobalStats)
          .catch(() => null);
        const legacySeriesPromise = fetchLegacyGlobalFromSeries(selectedChain, endDate);
        const firstStats = await Promise.race([legacyGlobalPromise, legacySeriesPromise]);
        const fallbackStats = hasGlobalStatsValues(firstStats) ? firstStats : await legacySeriesPromise;
        setGlobalStats(fallbackStats);
      } catch (error) {
        console.error("Failed to fetch global stats:", error);
        if (selectedChain !== "celo") {
          try {
            const endDate = new Date().toISOString().split("T")[0];
            setGlobalStats(await fetchLegacyGlobalFromSeries(selectedChain, endDate));
          } catch (seriesError) {
            console.error("Failed to fetch global stats from legacy series:", seriesError);
          }
        }
      } finally {
        setIsLoadingGlobal(false);
      }
    };
    fetchGlobalStats();
  }, [selectedChain]);

  // Fetch minted cards from Starknet contract
  useEffect(() => {
    const fetchMintedCards = async () => {
      setIsLoadingMinted(true);
      try {
        const provider = new RpcProvider({ nodeUrl: STARKNET_RPC_URL });
        const contract = new Contract({
          abi: NFT_ABI,
          address: NFT_CONTRACT_ADDRESS,
          providerOrAccount: provider,
        });
        const result = await contract.get_total_supply();
        // Result is { total_supply: bigint }
        const totalSupply = Number(result.total_supply);
        setMintedCards(totalSupply);
      } catch (error) {
        console.error("Failed to fetch minted cards:", error);
      } finally {
        setIsLoadingMinted(false);
      }
    };
    fetchMintedCards();
  }, []);

  // Fetch chart data based on selected metric
  const fetchChartData = useCallback(async () => {
    setIsLoadingChart(true);
    try {
      if (granularity !== "hour") {
        try {
          const analyticsParams = new URLSearchParams({
            blockchain: selectedChain,
            from: dateRange.startDate,
            to: dateRange.endDate,
          });
          const analyticsResponse = await fetchStatsApi(`/api/analytics/timeseries?${analyticsParams}`);
          const analyticsData = normalizeSeriesData(analyticsResponse, selectedMetric, granularity, true);

          if (analyticsData.length > 0) {
            setChartData(analyticsData);
            return;
          }
        } catch {
          // Analytics endpoints are optional while deployments migrate; legacy stats remain the fallback.
        }
      }

      if (selectedChain === "celo") {
        setChartData([]);
        return;
      }

      const params = new URLSearchParams({
        granularity,
        start_date: dateRange.startDate,
        end_date: dateRange.endDate,
      });
      if (selectedChain !== "all") params.set("blockchain", selectedChain);

      const endpointMap: Record<MetricType, string> = {
        transactions: `/api/stats/transactions?${params}`,
        games: `/api/stats/games?${params}`,
        players: `/api/stats/players?${params}`,
      };

      const response = await fetchGameApi(endpointMap[selectedMetric]);
      setChartData(normalizeSeriesData(response, selectedMetric, granularity));
    } catch (error) {
      console.error("Failed to fetch chart data:", error);
      setChartData([]);
    } finally {
      setIsLoadingChart(false);
    }
  }, [selectedMetric, selectedChain, dateRange, granularity]);

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData]);

  const currentMetricConfig = metricConfig[selectedMetric];
  const currentChainConfig = chainConfig[selectedChain];
  const avg = useMemo(() => {
    if (!chartData.length) return 0;
    const total = chartData.reduce((acc, d) => acc + d.value, 0);
    return Math.round(total / chartData.length);
  }, [chartData]);
  const avgLabel = useMemo(() => {
    if (granularity === "hour") return t("stats.chart.avg.hour");
    if (granularity === "day") return t("stats.chart.avg.day");
    if (granularity === "week") return t("stats.chart.avg.week");
    return t("stats.chart.avg.month");
  }, [granularity, t]);

  return (
    <Box
      minH="100vh"
      h={{ base: "auto", md: "100vh" }}
      bgColor="black"
      bgImage="url('/bg/bg-top.png')"
      bgSize="cover"
      bgPosition="top center"
      bgRepeat="no-repeat"
      color="white"
      position="relative"
      overflowX="hidden"
      overflowY={{ base: "auto", md: "hidden" }}
    >
      <Box
        position="fixed"
        top={{ base: 3, md: 4 }}
        right={{ base: 3, md: 4 }}
        zIndex={20}
      >
        <I18nLanguageSwitcher namespace="landing" />
      </Box>

      {/* Decorative borders */}
      <Image
        src="/borders/top.png"
        width="100%"
        maxHeight="70px"
        position="fixed"
        top={1}
        zIndex={10}
      />
      <Image
        src="/borders/bottom.png"
        width="100%"
        maxHeight="70px"
        position="fixed"
        bottom={1}
        zIndex={10}
      />

      {/* Main Content */}
      <Flex
        maxW="1400px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={{ base: 16, md: 20 }}
        h={{ base: "auto", md: "100%" }}
        flexDir="column"
      >
        {/* Header */}
        <Flex
          justify="space-between"
          align="center"
          mb={{ base: 4, md: 6 }}
          flexWrap="wrap"
          gap={2}
          flexShrink={0}
        >
          <Flex align="center" gap={3}>
            <Link to="/">
              <Image
                src="/logos/jn-logo.png"
                alt="Jokers of Neon Logo"
                h={{ base: "32px", md: "40px" }}
                cursor="pointer"
                _hover={{ filter: "brightness(1.2)" }}
                transition="filter 0.2s"
              />
            </Link>
            <Box>
              <Text
                fontFamily="Orbitron"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                letterSpacing="wider"
                bgGradient={`linear(to-r, ${colors.neonCyan}, ${colors.neonViolet})`}
                bgClip="text"
              >
                {t("stats.header.title")}
              </Text>
              <Text
                fontFamily="Oxanium"
                fontSize="2xs"
                color="whiteAlpha.600"
                letterSpacing="widest"
              >
                {t("stats.header.subtitle")}
              </Text>
            </Box>
          </Flex>

          {/* Status indicator */}
          <Flex align="center" gap={2}>
            <Box
              w="8px"
              h="8px"
              borderRadius="full"
              bg={currentChainConfig.color}
              boxShadow={`0 0 10px ${currentChainConfig.color}`}
              animation={`${pulseGlow} 2s ease-in-out infinite`}
            />
            <Text fontFamily="Oxanium" fontSize="xs" color="whiteAlpha.600">
              {currentChainConfig.label} - {t("stats.header.network")}
            </Text>
          </Flex>
        </Flex>

        {/* Global Stats Cards */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
          gap={{ base: 3, md: 4 }}
          mb={{ base: 4, md: 6 }}
          flexShrink={0}
        >
          <GridItem>
            <StatCard
              title={t("stats.cards.totalTransactions")}
              value={globalStats?.total_transactions || 0}
              color={colors.neonCyan}
              delay={0}
              isLoading={isLoadingGlobal}
              formatNumber={formatNumber}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title={t("stats.cards.totalGames")}
              value={globalStats?.total_games || 0}
              color={colors.neonViolet}
              delay={0.15}
              isLoading={isLoadingGlobal}
              formatNumber={formatNumber}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title={t("stats.cards.uniquePlayers")}
              value={globalStats?.total_unique_players || 0}
              color={colors.neonPink}
              delay={0.3}
              isLoading={isLoadingGlobal}
              formatNumber={formatNumber}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title={t("stats.cards.mintedCards")}
              value={mintedCards}
              color={colors.neonGreen}
              delay={0.45}
              isLoading={isLoadingMinted}
              formatNumber={formatNumber}
            />
          </GridItem>
        </Grid>

        {/* Single Chart Section */}
        <Flex
          bg={colors.cardBg}
          borderRadius="lg"
          p={{ base: 3, md: 4 }}
          border="1px solid"
          borderColor={`${currentMetricConfig.color}30`}
          animation={`${fadeInUp} 0.6s ease-out 0.4s both`}
          position="relative"
          overflow="hidden"
          flex="1"
          flexDir="column"
          minH={{ base: "320px", md: 0 }}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${currentMetricConfig.color}80, transparent)`,
          }}
        >
          {/* Chart Header */}
          <Flex
            justify="space-between"
            align={{ base: "stretch", md: "center" }}
            mb={3}
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: 3, md: 2 }}
            flexShrink={0}
          >
            <Flex w="100%" flexDir="column" gap={{ base: 3, md: 2 }}>
              {/* Metric Selector */}
              <ButtonGroup size={{ base: "xs", md: "sm" }} isAttached variant="outline" w={{ base: "100%", md: "auto" }}>
                {(Object.keys(metricConfigBase) as MetricType[]).map((metric) => (
                  <Button
                    key={metric}
                    onClick={() => setSelectedMetric(metric)}
                    bg={selectedMetric === metric ? `${metricConfig[metric].color}20` : "transparent"}
                    borderColor={selectedMetric === metric ? metricConfig[metric].color : "whiteAlpha.300"}
                    color={selectedMetric === metric ? metricConfig[metric].color : "whiteAlpha.700"}
                    fontFamily="Orbitron"
                    fontSize={{ base: "9px !important", md: "12px !important" }}
                    px={{ base: 2, md: 4 }}
                    flex="1"
                    minW={0}
                    _hover={{
                      bg: `${metricConfig[metric].color}10`,
                      borderColor: metricConfig[metric].color,
                    }}
                    >
                    {metricConfig[metric].label}
                  </Button>
                ))}
              </ButtonGroup>

              {/* Network Selector */}
              <ButtonGroup size={{ base: "xs", md: "sm" }} isAttached variant="outline" w={{ base: "100%", md: "auto" }}>
                {(["all", "starknet", "celo"] as ChainFilter[]).map((chain) => (
                  <Button
                    key={chain}
                    onClick={() => {
                      setSelectedChain(chain);
                      if (chain === "celo" && granularity === "hour") setGranularity("day");
                    }}
                    bg={selectedChain === chain ? `${chainConfig[chain].color}20` : "transparent"}
                    borderColor={selectedChain === chain ? chainConfig[chain].color : "whiteAlpha.300"}
                    color={selectedChain === chain ? chainConfig[chain].color : "whiteAlpha.700"}
                    fontFamily="Orbitron"
                    fontSize={{ base: "9px !important", md: "12px !important" }}
                    px={{ base: 2, md: 4 }}
                    flex="1"
                    minW={0}
                    _hover={{
                      bg: `${chainConfig[chain].color}10`,
                      borderColor: chainConfig[chain].color,
                    }}
                  >
                    {chainConfig[chain].label}
                  </Button>
                ))}
              </ButtonGroup>

              <Flex
                w="100%"
                align="center"
                justify={{ base: "space-between", md: "flex-start" }}
                gap={{ base: 3, md: 6 }}
                flexWrap="wrap"
              >
                {/* Time Range Selector */}
                <ButtonGroup size={{ base: "xs", md: "sm" }} isAttached variant="outline">
                  {(["1D", "1W", "1M", "1Y", "all"] as TimeRange[]).map((range) => (
                    <Button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      bg={timeRange === range ? `${currentMetricConfig.color}20` : "transparent"}
                      borderColor={timeRange === range ? currentMetricConfig.color : "whiteAlpha.300"}
                      color={timeRange === range ? currentMetricConfig.color : "whiteAlpha.700"}
                      fontFamily="Orbitron"
                      fontSize={{ base: "9px !important", md: "12px !important" }}
                      px={{ base: 2, md: 3 }}
                      minW={0}
                      _hover={{
                        bg: `${currentMetricConfig.color}10`,
                        borderColor: currentMetricConfig.color,
                      }}
                    >
                      {range === "all" ? t("stats.chart.all") : range}
                    </Button>
                  ))}
                </ButtonGroup>

                {/* Granularity Selector */}
                <Flex align="center" gap={2}>
                  <Select
                    size={{ base: "xs", md: "sm" }}
                    value={granularity}
                    onChange={(e) => setGranularity(e.target.value as Granularity)}
                    bg="transparent"
                    borderColor="whiteAlpha.300"
                    color="whiteAlpha.800"
                    fontFamily="Orbitron"
                    fontSize={{ base: "2xs", md: "xs" }}
                    w={{ base: "90px", md: "110px" }}
                    _hover={{ borderColor: currentMetricConfig.color }}
                    _focus={{ borderColor: currentMetricConfig.color, boxShadow: `0 0 0 1px ${currentMetricConfig.color}` }}
                  >
                    <option value="hour" disabled={selectedChain === "celo"}>
                      {t("stats.chart.granularity.hour")}
                    </option>
                    <option value="day">{t("stats.chart.granularity.day")}</option>
                    <option value="week">{t("stats.chart.granularity.week")}</option>
                    <option value="month">{t("stats.chart.granularity.month")}</option>
                  </Select>
                </Flex>

                <Box textAlign={{ base: "left", md: "right" }} ml={{ md: "auto" }}>
                  <Text fontSize="xs" color="whiteAlpha.500" fontFamily="Oxanium">
                    {avgLabel}
                  </Text>
                  <Text fontSize="lg" color={currentMetricConfig.color} fontFamily="Orbitron" fontWeight="bold">
                    {formatNumber(avg)}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>

          {/* Chart */}
          <Box flex="1" minH={{ base: "220px", md: 0 }}>
            <NeonLineChart
              data={chartData}
              color={currentMetricConfig.color}
              isLoading={isLoadingChart}
              granularity={granularity}
              noDataLabel={t("stats.chart.noData")}
              monthNames={monthNames}
              formatNumber={formatNumber}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
