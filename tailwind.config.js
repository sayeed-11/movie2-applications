/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#6ab04c'
      }
    },
  },
  // presets: ["babel-preset-expo"],
  // plugins: ["nativewind/babel"],
  plugins: [],
  // corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}


