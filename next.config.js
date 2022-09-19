/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')
module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"]
  }
})
