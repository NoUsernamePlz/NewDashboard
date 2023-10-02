/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    
    extend: {

      screens:{
        'xs':'250px',
      },
      
      colors: {
        steelblue: {
          "100": "#9292c1",
          "200": "#5a5a89",
        },
        "blueish-black": "#191932",
        white: "#fff",
        mediumslateblue: "#3247e5",
        "purple-blue": "#6a6a9f",
        royalblue: "#176bf8",
        black: "#05050f",
        "blueish-black1": "#14142b",
        "electric-green": "#5eff5a",
        gray: "#16162b",
        darkslateblue: "#3d3d60",
      },
      
      fontFamily: {
        mainfont: "'Open Sans'",
        mulish: "Mulish",
        archivo: "Archivo",
      },
      borderRadius: {
        "3xs": "10px",
        "12xs": "1px",
      },
    },
    fontSize: {
      "3xs": "10px",
      smi: "11px",
      "xl-5": "20.5px",
      base: "14px",
      xs: "10px",
      sm: "13px",
      "15xl": "30px",
      "5xl": "20px",
      xl: "16px",
      "41xl": "38px",
      "53xl": "72px",
      inherit: "inherit",
    },
  },

  
  corePlugins: {
    preflight: false,
  },
};


