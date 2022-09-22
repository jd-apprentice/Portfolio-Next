/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate');
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withPlugins([
  // Taildwind Material Configuration
  [withMT, {
    content: ["./pages/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }],

  // Next Translate Configuration
  [nextTranslate, {
    webpack: (config) => {
      return config;
    },
    reactStrictMode: true,
    images: {
      domains: ["avatars.githubusercontent.com"]
    }
  }],
]);
