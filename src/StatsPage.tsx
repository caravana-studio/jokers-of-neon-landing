import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Image,
  Skeleton,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

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
  neonCyan: "#20C6ED",
  neonViolet: "#A144B2",
  neonBlue: "#066b9b",
  neonPink: "#FF2E97",
  neonGreen: "#00FF88",
  darkBg: "#0a0a0f",
  cardBg: "rgba(10, 10, 20, 0.8)",
  gridLine: "rgba(32, 198, 237, 0.1)",
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
}: {
  data: TimeSeriesData[];
  color: string;
  isLoading: boolean;
}) => {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; value: number; period: string; isFirst: boolean; isLast: boolean } | null>(null);
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

  return (
    <Box position="relative" h="100%" w="100%">
      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%" }}
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

        {/* Data points with hover areas */}
        {points.map((p, i) => (
          <g key={i}>
            {/* Invisible larger hit area */}
            <circle
              cx={p.x}
              cy={p.y}
              r="5"
              fill="transparent"
              style={{ cursor: "crosshair" }}
              onMouseEnter={(e) => {
                const svg = e.currentTarget.ownerSVGElement;
                if (svg) {
                  const svgRect = svg.getBoundingClientRect();
                  const xPos = (p.x / chartWidth) * svgRect.width;
                  const yPos = (p.y / chartHeight) * svgRect.height;
                  setTooltip({
                    x: xPos,
                    y: yPos,
                    value: p.value,
                    period: p.period,
                    isFirst: i === 0,
                    isLast: i === points.length - 1,
                  });
                }
              }}
              onMouseLeave={() => setTooltip(null)}
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
          <Text fontFamily="Orbitron" fontSize="sm" color={color} fontWeight="bold">
            {tooltip.value.toLocaleString()}
          </Text>
          <Text fontFamily="Oxanium" fontSize="xs" color="whiteAlpha.700">
            {tooltip.period}
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
  icon,
  color,
  delay,
  isLoading,
}: {
  title: string;
  value: number;
  icon: string;
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

      <VStack spacing={1} align="center">
        <Text fontSize="2xl" animation={`${glowPulse} 2s ease-in-out infinite`} color={color}>
          {icon}
        </Text>
        <Text
          fontFamily="Orbitron"
          fontSize="2xs"
          color="whiteAlpha.700"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          {title}
        </Text>
        {isLoading ? (
          <Skeleton height="36px" width="100px" startColor={`${color}20`} endColor={`${color}40`} />
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
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(true);
  const [isLoadingChart, setIsLoadingChart] = useState(true);

  // Date range: December 2025 to today (dynamic)
  const dateRange = useMemo(() => {
    const today = new Date();
    const endDate = today.toISOString().split("T")[0];
    const startDate = "2025-12-01";
    return { startDate, endDate };
  }, []);

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

  // Fetch chart data based on selected metric
  const fetchChartData = useCallback(async () => {
    setIsLoadingChart(true);
    try {
      const params = `granularity=week&start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`;

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
  }, [selectedMetric, dateRange]);

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData]);

  const currentMetricConfig = metricConfig[selectedMetric];
  const total = useMemo(() => chartData.reduce((acc, d) => acc + d.value, 0), [chartData]);
  const avg = useMemo(() => (chartData.length ? Math.round(total / chartData.length) : 0), [chartData, total]);

  return (
    <Box
      h="100vh"
      bg={colors.darkBg}
      bgImage="radial-gradient(ellipse at top, rgba(6, 107, 155, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(161, 68, 178, 0.1) 0%, transparent 50%)"
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Scanline effect overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        pointerEvents="none"
        zIndex={100}
        opacity={0.03}
        background="repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(32, 198, 237, 0.1) 2px, rgba(32, 198, 237, 0.1) 4px)"
      />

      {/* Animated scanline */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        height="4px"
        background={`linear-gradient(180deg, transparent, ${colors.neonCyan}40, transparent)`}
        animation={`${scanline} 8s linear infinite`}
        pointerEvents="none"
        zIndex={101}
        opacity={0.5}
      />

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
        h="100%"
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
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={{ base: 3, md: 4 }}
          mb={{ base: 4, md: 6 }}
          flexShrink={0}
        >
          <GridItem>
            <StatCard
              title="Total Transactions"
              value={globalStats?.total_transactions || 0}
              icon="💎"
              color={colors.neonCyan}
              delay={0}
              isLoading={isLoadingGlobal}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title="Total Games"
              value={globalStats?.total_games || 0}
              icon="🃏"
              color={colors.neonViolet}
              delay={0.15}
              isLoading={isLoadingGlobal}
            />
          </GridItem>
          <GridItem>
            <StatCard
              title="Unique Players"
              value={globalStats?.total_unique_players || 0}
              icon="👥"
              color={colors.neonPink}
              delay={0.3}
              isLoading={isLoadingGlobal}
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
          minH={0}
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
            align={{ base: "start", md: "center" }}
            mb={3}
            flexDir={{ base: "column", md: "row" }}
            gap={2}
            flexShrink={0}
          >
            {/* Metric Selector */}
            <ButtonGroup size="sm" isAttached variant="outline">
              {(Object.keys(metricConfig) as MetricType[]).map((metric) => (
                <Button
                  key={metric}
                  onClick={() => setSelectedMetric(metric)}
                  bg={selectedMetric === metric ? `${metricConfig[metric].color}20` : "transparent"}
                  borderColor={selectedMetric === metric ? metricConfig[metric].color : "whiteAlpha.300"}
                  color={selectedMetric === metric ? metricConfig[metric].color : "whiteAlpha.700"}
                  fontFamily="Orbitron"
                  fontSize="xs"
                  px={4}
                  _hover={{
                    bg: `${metricConfig[metric].color}10`,
                    borderColor: metricConfig[metric].color,
                  }}
                >
                  {metricConfig[metric].icon} {metricConfig[metric].label}
                </Button>
              ))}
            </ButtonGroup>

            {/* Stats Summary */}
            <Flex gap={6}>
              <Box textAlign="right">
                <Text fontSize="xs" color="whiteAlpha.500" fontFamily="Oxanium">
                  PERIOD TOTAL
                </Text>
                <Text fontSize="lg" color={currentMetricConfig.color} fontFamily="Orbitron" fontWeight="bold">
                  {total.toLocaleString()}
                </Text>
              </Box>
              <Box textAlign="right">
                <Text fontSize="xs" color="whiteAlpha.500" fontFamily="Oxanium">
                  WEEKLY AVG
                </Text>
                <Text fontSize="lg" color={currentMetricConfig.color} fontFamily="Orbitron" fontWeight="bold">
                  {avg.toLocaleString()}
                </Text>
              </Box>
            </Flex>
          </Flex>

          {/* Chart */}
          <Box flex="1" minH={0}>
            <NeonLineChart
              data={chartData}
              color={currentMetricConfig.color}
              isLoading={isLoadingChart}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
