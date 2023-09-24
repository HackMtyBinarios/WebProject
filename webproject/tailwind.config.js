/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      "Negro": '#1F1F1F',
      "Verde": "#9CFFDB",
      "Gris": "#E3E3E3",
      "Gris-Claro": '#F9F9F9',
      "Verde-Clarito": '#E9FFF7',
      "Gris-Oscuro": '#707070'
    },
    extend: {
      fontFamily:{
        'chivo':['Chivo+Mono']
      }
    },
  },
  plugins: [],
}
