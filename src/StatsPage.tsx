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
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Contract, RpcProvider, type Abi } from "starknet";
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
const API_BASE_URL = "https://mainnet-jokers-of-neon-api.onrender.com";
const API_KEY = "a97b9de72eeed8935c4521692396b6bd363ef8d9e440e0a95790493d3116b05d";

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
type Granularity = "hour" | "day" | "week" | "month";
type TimeRange = "1D" | "1W" | "1M" | "1Y" | "all";

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

const metricConfig: Record<MetricType, { label: string; color: string; icon: string }> = {
  transactions: { label: "TRANSACTIONS", color: colors.neonCyan, icon: "💎" },
  games: { label: "GAMES", color: colors.neonViolet, icon: "🃏" },
  players: { label: "PLAYERS", color: colors.neonPink, icon: "👥" },
};

// API fetch helper
const fetchApi = async (endpoint: string) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { "X-API-Key": API_KEY },
  });
  if (!response.ok) throw new Error("API request failed");
  return response.json();
};

// Custom Neon Line Chart Component
const NeonLineChart = ({
  data,
  color,
  isLoading,
  granularity,
}: {
  data: TimeSeriesData[];
  color: string;
  isLoading: boolean;
  granularity: Granularity;
}) => {
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    value: number;
    period: string;
    isFirst: boolean;
    isLast: boolean;
    index: number;
  } | null>(null);
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
          No data available
        </Text>
      </Box>
    );
  }

  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const chartHeight = 280;
  const chartWidth = 840;
  const paddingX = 16;
  const paddingY = 6;

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
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
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
      const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      return `${monthNames[monthIndex]} ${year}`;
    }

    return period;
  };

  return (
    <Box position="relative" h="100%" w="100%">
      <svg
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
        {points.map((p, i) => (
          <g key={i}>
            {/* Invisible larger hit area */}
            <circle
              cx={p.x}
              cy={p.y}
              r="5"
              fill="transparent"
              pointerEvents="none"
            />
            {/* Visible point */}
            <circle
              cx={p.x}
              cy={p.y}
              r="2.4"
              fill={color}
              filter="url(#chart-glow)"
              style={{ pointerEvents: "none" }}
            />
          </g>
        ))}
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
            {tooltip.value.toLocaleString()}
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
            {val.toLocaleString()}
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
}: {
  title: string;
  value: number;
  color: string;
  delay: number;
  isLoading: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isLoading || value === 0) {
      setDisplayValue(0);
      return;
    }

    const duration = 1500;
    const steps = 60;
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
            {displayValue.toLocaleString()}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

// Main Stats Page Component
export const StatsPage = () => {
  const [globalStats, setGlobalStats] = useState<GlobalStats | null>(null);
  const [chartData, setChartData] = useState<TimeSeriesData[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<MetricType>("transactions");
  const [timeRange, setTimeRange] = useState<TimeRange>("all");
  const [granularity, setGranularity] = useState<Granularity>("day");
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(true);
  const [isLoadingChart, setIsLoadingChart] = useState(true);
  const [mintedCards, setMintedCards] = useState<number>(0);
  const [isLoadingMinted, setIsLoadingMinted] = useState(true);

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
        startDate = "2025-12-01";
        break;
    }

    return { startDate, endDate };
  }, [timeRange]);

  // Fetch global stats
  useEffect(() => {
    const fetchGlobalStats = async () => {
      setIsLoadingGlobal(true);
      try {
        const response = await fetchApi("/api/stats/global");
        if (response.success) {
          setGlobalStats(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch global stats:", error);
      } finally {
        setIsLoadingGlobal(false);
      }
    };
    fetchGlobalStats();
  }, []);

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
      const params = `granularity=${granularity}&start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`;

      const endpointMap: Record<MetricType, string> = {
        transactions: `/api/stats/transactions?${params}`,
        games: `/api/stats/games?${params}`,
        players: `/api/stats/players?${params}`,
      };

      const response = await fetchApi(endpointMap[selectedMetric]);

      if (response.success) {
        const fieldMap: Record<MetricType, string> = {
          transactions: "total_transactions",
          games: "total_games",
          players: "unique_players",
        };

        const mappedData = response.data.map((d: Record<string, unknown>) => ({
          period: (d.periodo || d.period) as string,
          value: d[fieldMap[selectedMetric]] as number,
        }));

        // Sort by date ascending (oldest first on left, newest on right)
        mappedData.sort((a: TimeSeriesData, b: TimeSeriesData) =>
          new Date(a.period).getTime() - new Date(b.period).getTime()
        );

        setChartData(mappedData);
      }
    } catch (error) {
      console.error("Failed to fetch chart data:", error);
      setChartData([]);
    } finally {
      setIsLoadingChart(false);
    }
  }, [selectedMetric, dateRange, granularity]);

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData]);

  const currentMetricConfig = metricConfig[selectedMetric];
  const avg = useMemo(() => {
    if (!chartData.length) return 0;
    const total = chartData.reduce((acc, d) => acc + d.value, 0);
    return Math.round(total / chartData.length);
  }, [chartData]);
  const avgLabel = useMemo(() => {
    if (granularity === "hour") return "HOURLY AVG";
    if (granularity === "day") return "DAILY AVG";
    if (granularity === "week") return "WEEKLY AVG";
    return "MONTHLY AVG";
  }, [granularity]);

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
                LIVE STATS
              </Text>
              <Text
                fontFamily="Oxanium"
                fontSize="2xs"
                color="whiteAlpha.600"
                letterSpacing="widest"
              >
                REAL-TIME ANALYTICS
              </Text>
            </Box>
          </Flex>

          {/* Status indicator */}
          <Flex align="center" gap={2}>
            <Box
              w="8px"
              h="8px"
              borderRadius="full"
              bg={colors.neonGreen}
              boxShadow={`0 0 10px ${colors.neonGreen}`}
              animation={`${pulseGlow} 2s ease-in-out infinite`}
            />
            <Text fontFamily="Oxanium" fontSize="xs" color="whiteAlpha.600">
              MAINNET
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
              title="Total Transactions"
              value={globalStats?.total_transactions || 0}
              color={colors.neonCyan}
              delay={0}
              isLoading={isLoadingGlobal}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title="Total Games"
              value={globalStats?.total_games || 0}
              color={colors.neonViolet}
              delay={0.15}
              isLoading={isLoadingGlobal}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title="Unique Players"
              value={globalStats?.total_unique_players || 0}
              color={colors.neonPink}
              delay={0.3}
              isLoading={isLoadingGlobal}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title="Minted Cards"
              value={mintedCards}
              color={colors.neonGreen}
              delay={0.45}
              isLoading={isLoadingMinted}
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
                {(Object.keys(metricConfig) as MetricType[]).map((metric) => (
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
                      {range === "all" ? "ALL" : range}
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
                    <option value="hour">HOURLY</option>
                    <option value="day">DAILY</option>
                    <option value="week">WEEKLY</option>
                    <option value="month">MONTHLY</option>
                  </Select>
                </Flex>

                <Box textAlign={{ base: "left", md: "right" }} ml={{ md: "auto" }}>
                  <Text fontSize="xs" color="whiteAlpha.500" fontFamily="Oxanium">
                    {avgLabel}
                  </Text>
                  <Text fontSize="lg" color={currentMetricConfig.color} fontFamily="Orbitron" fontWeight="bold">
                    {avg.toLocaleString()}
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
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
