/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		  extend: {
			  fontFamily: {
				  kumbh: ["Kumbh Sansns", "serif"],
			  },
  
			  colors: {
				  w_blur: "rgba(255, 255, 255, 0.2)",
				  light_gray: "#EEEEEE",
				  lg_blur: "rgba(255, 255, 255, 0.8)",
				  blue: "#3955B2",
				  blue_blur: "rgba(27, 20, 100, 0.1)",
				  primary: "#1B1464",
				  black: "#161616",
				  yellow: "#FFBA07",
				  title_color: "#1E1E1E",
				  txt_blur: "rgba(22, 22, 22, 0.8)",
				  Text: "#666666",
				  txt_black: "rgba(0, 0, 0, 0.6)",
				  border: "rgba(27, 20, 100, 0.1)",
			  },
		  },
	  },
	  plugins: [
	  ],
  }
  
  