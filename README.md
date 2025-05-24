# Crypto Asset Tracker

A modern web application to track and analyze cryptocurrency assets, built with Next.js, React, Zustand, and Tailwind CSS. The app provides real-time data, interactive charts, and detailed information for a wide range of cryptocurrencies.

## Features

- Browse and search a list of cryptocurrencies
- View detailed information and statistics for each coin
- Interactive price and candlestick charts with multiple timeframes
- Add coins to your portfolio (UI only)
- Responsive, accessible, and modern UI
- Error boundaries for robust user experience

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **UI:** React 19, Tailwind CSS, Shadcn UI, Lucide Icons
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Data Fetching:** Axios, CoinGecko API
- **Charts:** [lightweight-charts](https://tradingview.github.io/lightweight-charts/)
- **Testing:** Jest, React Testing Library, Playwright (E2E)
- **Storybook:** For UI component development
- **Linting/Formatting:** ESLint (Airbnb, Prettier)
- **Type Safety:** TypeScript

## Directory Structure

```
/ (root)
├── src/
│   ├── app/                # Next.js app directory (routing, pages)
│   │   └── coins/          # Coins list, coin details, dashboard pages
│   ├── components/         # Reusable UI components
│   │   ├── coins-list/     # List/search components for coins
│   │   ├── coins-dashboard/# Dashboard panels and charts
│   │   ├── bricks/         # UI primitives (Button, Icon, etc.)
│   │   └── common/         # Error boundaries, shared utilities
│   ├── services/           # API hooks and HTTP utilities
│   ├── store/              # Zustand stores for state management
│   ├── constants/          # API endpoints, config values
│   └── interfaces/         # TypeScript interfaces and types
├── public/                 # Static assets
├── .storybook/             # Storybook configuration
├── jest.config.js          # Jest configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
```

## Getting Started

1. **Install dependencies:**
   ```bash
   yarn install
   # or npm install
   ```

2. **Run the development server:**
   ```bash
   yarn dev
   # or npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

3. **Build for production:**
   ```bash
   yarn build && yarn start
   # or npm run build && npm start
   ```

4. **Run tests:**
   ```bash
   yarn test
   yarn test:coverage
   # or npm run test
   ```

5. **Storybook (UI development):**
   ```bash
   yarn storybook
   # or npm run storybook
   ```

## Architecture & State Management

- **Pages:**
  - `/coins` — Main list/search page for cryptocurrencies
  - `/coins/[coinId]/dashboard` — Dashboard with charts and detailed info for a selected coin
- **State:** Managed with Zustand stores (`src/store/`). Coins list and dashboard state are separated for modularity.
- **API:** Data is fetched from the CoinGecko API via custom hooks in `src/services/rest-api-hooks/coins/`. Coin list is cached in localStorage for performance.
- **Charts:** Interactive line and candlestick charts using `lightweight-charts`.
- **Error Handling:** All main pages are wrapped in error boundaries for resilience.

## Linting, Formatting & Best Practices

- Lint: `yarn lint` (auto-fix: `yarn lint:fix`)
- Follows Airbnb JavaScript/React style guide and Prettier formatting
- TypeScript for type safety
- Modular, reusable component structure

## Contributing

1. Fork the repo and create a feature branch
2. Follow the code style and naming conventions
3. Add/modify tests for your changes
4. Open a pull request with a clear description

## License

This project is for educational/demo purposes. Please check with the author before using in production.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
