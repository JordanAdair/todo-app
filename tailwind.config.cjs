/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				// Primary Dark
				darkBlue800: "hsl(240, 20%, 12%)",
				darkBlue500: "hsl(235, 24%, 19%)",
				lightBlue100: "hsl(235, 32%, 95%)",
				lightBlue200: "hsl(235, 32%, 85%)",
				lavender500: "hsl(238, 14%, 42%)",
				// Primary Light
				lightGray200: "hsl(0, 0%, 98%)",
				lightGray300: "hsl(84, 33%, 97%)",
				lightGray600: "hsl(235, 15%, 10%)",
				lightGray700: "hsl(235, 14%, 32%)",

				// Secondary
				mediumBlue300: "hsl(222, 63%, 55%)",
			},
		},
		fontFamily: {
			josefinSans: "Josefin Sans",
		},
		backgroundImage: {
			desktopDarkBg: "url('assets/bg-desktop-dark.jpg')",
			desktopLightBg: "url('assets/bg-desktop-light.jpg')",
			mobileDarkBg: "url('assets/bg-mobile-dark.jpg')",
			mobileLightBg: "url('assets/bg-mobile-light.jpg')",
		},
	},
	plugins: [],
};
