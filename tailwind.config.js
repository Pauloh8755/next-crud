module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /from-(gray|green|blue)-(400|700)/,
    },
    {
      pattern: /to-(gray|green|blue)-(400|700)/,
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
