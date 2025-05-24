import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // As NextJS's backend (api folder) runs in Vercel servers, we need to set the
  // environment vars used in app/api/*/route.ts here for it to be included in
  // bundle and accessible in the server-side code
  env: {
    NEXT_PUBLIC_COIN_GECKO_BASE_URL: process.env.NEXT_PUBLIC_COIN_GECKO_BASE_URL,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
};

export default nextConfig;
