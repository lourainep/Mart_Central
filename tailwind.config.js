/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
            fontFamily: {
              'sans': ['Lobster', 'cursive',],
            },
        colors: {
            primary: "#DA1212",
            secondary: "#EA1616",
            textw: "#FFFFFF",
            yellow: "#FFE933",
            brown: "#874F00",
            red: "#D41818",
            stone: "#949191",
            green: "#196B30",
            amber: "   #F08C00",
            red: "#900C3F ",
        },
        fontFamily: {
            primary:"Lobster ,cursive",
        },
        extend: {},
    },
    plugins: [],
}