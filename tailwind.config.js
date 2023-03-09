/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: ['./theme/**/*.ftl'],
  plugins: [require("daisyui")],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#d5152f",
                  
          "secondary": "#e5a0c0",
                  
          "accent": "#d9dd4d",
                  
          "neutral": "#6b7280",
                  
          // "base-100": "#1f2937",
          "base-100": "#212121",
                  
          "info": "#A5BDE9",
                  
          "success": "#14A352",
                  
          "warning": "#FCA22C",
                  
          "error": "#FA5C7E",
        },
      },
    ],
  },
};
