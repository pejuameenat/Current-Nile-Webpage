 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        // custom colors
        primary: "#004324",
        pry1: "#fff",
        pry2: "#F5F5F5",
        pry3: '#333',
        myCustomColor: {
          light: "#8ED06C",
          lighterGreen: "#EAF4E2",
          secondary: "#6E6E6E",
          blue:'#002756'
        },
        borderRadius: {
          "semi-round": "2rem",
          "very-round": "4rem",
        },
        width: {
          'inputW': '300px',
          '30': '100px',
          '75':'514px',
        },
        
      },
    },
    plugins: [],
  }
}

