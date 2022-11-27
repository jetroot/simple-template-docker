/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blueGray-50": "#f8fafc",
        "blueGray-100": "#f1f5f9",
        "blueGray-200": "#e2e8f0",
        "blueGray-300":"#cbd5e1",
        "blueGray-400": "#94a3b8",
        "blueGray-500":"#646a8b",
        "blueGray-600": "#475569",
        "blueGray-700": "#334155d9",
      },
    },
  },
  plugins: [],
}
