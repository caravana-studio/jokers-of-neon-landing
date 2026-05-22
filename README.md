# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Environment Variables

```bash
VITE_GAME_API_URL      # Main game API URL. Falls back to VITE_API_URL.
VITE_API_URL           # Legacy API URL fallback.
VITE_GAME_API_KEY      # API key for protected game API endpoints. Falls back to VITE_API_KEY.
VITE_API_KEY           # Legacy API key fallback.
VITE_STATS_API_URL     # Optional analytics API URL for /api/analytics/* cached stats.
VITE_ANALYTICS_API_URL # Legacy analytics API URL fallback.
```

Stats first try the cached analytics endpoints:

- `/api/analytics/summary?blockchain=<all|starknet|celo>`
- `/api/analytics/timeseries?blockchain=<all|starknet|celo>&from=<yyyy-mm-dd>&to=<yyyy-mm-dd>`

If those are unavailable, the page falls back to the protected legacy `/api/stats/*` endpoints.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
