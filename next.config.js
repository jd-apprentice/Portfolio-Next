/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = nextTranslate({
  webpack: (config) => {
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"]
  }
})
 
module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
