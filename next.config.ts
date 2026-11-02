import type { NextConfig } from 'next';
import { fileURLToPath } from 'node:url';
const apiOrigin = process.env.API_INTERNAL_URL || 'http://127.0.0.1:3001';
const config: NextConfig = {
  outputFileTracingRoot: fileURLToPath(new URL('../', import.meta.url)),
  transpilePackages: ['@penny/shared'],
  async rewrites() {
    return [{ source: '/api/:path*', destination: `${apiOrigin}/api/:path*` }];
  },
  async headers() {
    return [{ source: '/api/:path*', headers: [{ key: 'Cache-Control', value: 'no-store' }] }];
  },
};
export default config;
