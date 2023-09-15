/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "320px", // Add a custom breakpoint for extra small screens
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["lofi"],
    },
};
