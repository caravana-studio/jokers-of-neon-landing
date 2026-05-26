# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Type-check (tsc) + production build
npm run lint     # ESLint with strict TypeScript rules (zero warnings allowed)
npm run preview  # Preview production build locally
```

## Architecture Overview

This is a React/TypeScript landing page for "Jokers of Neon", a card game with Starknet blockchain integration.

### Tech Stack
- **React 18** with Vite 5 (SWC for fast refresh)
- **TypeScript** in strict mode
- **Chakra UI** for components and theming
- **Starknet** blockchain integration with Cartridge wallet connector
- **SCSS** for supplementary styling

### Project Structure

```
src/
├── Components/     # Reusable section components (HomeSection, CardsSection, etc.)
├── theme/          # Page components and Chakra theme config (colors, breakpoints)
├── utils/          # Custom hooks (useUsername) and API utilities (registerEarlyAccess)
├── constants/      # App-wide constants
├── assets/         # Static images
├── App.tsx         # Root: providers setup + routing
└── main.tsx        # Entry point
```

### Provider Hierarchy (App.tsx)
```
StarknetProvider → ChakraBaseProvider → BrowserRouter → Routes
```

### Routes
- `/` - MainPage (landing with all sections)
- `/early` - EarlyAccessPage (season registration)
- `/play` - StoresPage (app download links)
- `/privacy-policy`, `/terms-and-conditions`, `/delete-account` - Static pages

### Key Patterns

**Responsive Design**: Uses `react-device-detect` for mobile/desktop variants. Check `isMobile` for conditional rendering.

**Styling**: Prefer Chakra's `sx` prop with responsive arrays/objects (`base`, `md`, `xl` breakpoints).

**Web3**: Starknet provider at root. Use `useAccount()` hook and Cartridge controller utilities for wallet operations.

**Page Composition**: MainPage orchestrates sections. Each section (HomeSection, CardsSection, BoxSection, DemoSection, EarlyAccessSeason, FooterSection) is self-contained.

## Environment Variables

```
VITE_GAME_API_URL   # Primary API endpoint (fallback: VITE_API_URL)
VITE_API_KEY        # Optional API authentication
```

Default API: `https://jokers-of-neon-api-zf1x.onrender.com`
