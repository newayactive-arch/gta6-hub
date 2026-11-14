import type { NextConfig } from "next";

const securityHeaders = [
  // Protection XSS / MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // ATTENTION: X-Frame-Options retiré pour permettre au preview panel z.ai
  // d'embarquer le site dans un iframe. À remettre en production Vercel.
  // Strict Transport Security — force HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Referrer policy
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  // Permissions policy — limite les APIs navigateur
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  // Pas de output: "standalone" sur Vercel — Vercel gère ça tout seul
  reactStrictMode: false,
  poweredByHeader: false,
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // Autorise le panel preview z.ai à accéder au dev server sans blocage CORS
  allowedDevOrigins: [
    "preview-chat-0fdd7422-787e-4802-9bde-7ffe779c4881.space-z.ai",
    "*.space-z.ai",
    "preview-*.space-z.ai",
    "preview-chat-*.space-z.ai",
    "localhost",
    "127.0.0.1",
  ],
  // Optimisation d'images pour Vercel Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z-cdn.chatglm.cn",
        pathname: "/image-search-mcp/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
  },
  // Headers de sécurité appliqués à toutes les routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Cache statique pour les assets Next
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache pour les images du CDN
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
