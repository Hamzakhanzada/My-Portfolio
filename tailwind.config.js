/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  
  theme: {
    extend: {
      colors: {
        blacks: "#1f1f1f",
        green: "#28e98c",
        gray: "#999999",
      },
      animation: {
        rotate: 'rotate 5s linear infinite', // Define the rotation animation
        fadeIn: 'fadeIn 1s ease-in-out forwards', // Define fade-in animation
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(60px)' }, // Start with opacity 0 and moved down
          '100%': { opacity: '1', transform: 'translateY(0)' }, // End with opacity 1 and original position
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn-custom': {
          fontSize: '0.75rem', // text-xs
          color: '#ffffff',    // text-white
          textTransform: 'uppercase', // uppercase
          fontWeight: '300',   // font-light
          margin: '0',         // m-0
          borderWidth: '1px',  // border
          borderColor: '#999999', // border-gray using defined gray color
          paddingLeft: '20px', // px-[20px]
          paddingRight: '20px',
          paddingTop: '9px',   // py-[9px]
          paddingBottom: '9px',
          marginBottom: '53px',
          borderRadius: '30px', // rounded-[30px]
          display: 'inline-flex',
          alignItems: 'center', // items-center
        },
        '.custom-text': {
          fontSize: '3rem',         // Base font size (48px)
          lineHeight: '80px',       // Custom line height
          color: '#fff',            // Custom text color
          textTransform: '', // Uppercase transformation
          animation: 'fadeIn 1s ease-in-out forwards', // Animation
        },
        '.custom-heading': {
          fontSize: '3rem',         // Base font size (48px)
          lineHeight: '90px',       // leading-[90px]
          marginBottom: '43px',     // mb-[43px]
          fontWeight: '400',        // font-normal
          letterSpacing: '-0.2px',  // tracking-[-0.2px]
          animation: 'fadeIn 1s ease-in-out forwards', // Animation
        },
        '@media (min-width: 768px)': {
          '.custom-text': {
            fontSize: '3.5rem',    // md:text-6xl (60px)
          },
          '.custom-heading': {
            fontSize: '3.75rem',    // md:text-6xl (60px)
          },
        },
        '@media (min-width: 1024px)': {
          '.custom-text': {
            fontSize: '4rem',      // lg:text-7xl (68px)
          },
          '.custom-heading': {
            fontSize: '4.25rem',    // lg:text-7xl (68px)
          },
        },
        '@media (min-width: 1280px)': {
          '.custom-text': {
            fontSize: '4rem',      // xl:text-7xl (68px)
          },
          '.custom-heading': {
            fontSize: '4.25rem',    // xl:text-7xl (68px)
          },
        },
      });
    },
  ],
}
