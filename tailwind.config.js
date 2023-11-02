/** @type {import('tailwindcss').Config} */
module.exports = {
    /* 
  NOTE: The double asterisk is a globbing pattern that matches all directories 
  recursively. The single asterisk matches any sequence of characters in 
  a file name.
  */
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {},
    },
    plugins: [],
};
