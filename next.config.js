/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate-plugin");
const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'wallpapercave.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  // next-translate plugin configuration
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
});

module.exports = nextConfig;
