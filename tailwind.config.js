module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#E0144C",
        
"secondary": "#101314",
        
"accent": "#F86F03",
        
"neutral": "#253041",
        
"base-100": "#fcfcfd",
        
"info": "#a7cbe2",
        
"success": "#1cba90",
        
"warning": "#f3c268",
        
"error": "#f41528",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}