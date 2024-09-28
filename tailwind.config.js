/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html"],
  theme: {
    extend: {
      colors:{
        primary: '#333'
      },
      spacing: {
        '24_56': "24px 56px;",
        '488': '488px'
      },
      borderRadius: {
        '40': '40px'
      }
    },
  },
  plugins: [],
}

