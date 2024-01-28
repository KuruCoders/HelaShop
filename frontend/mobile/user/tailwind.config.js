/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}","./constants/**/*.{js,jsx,ts,tsx}","./navigation/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        back: '#f4f6f8', // Replace with your desired color code
        bgInput: "#d1d1d1", // Replace with your desired color code
      },
      fontFamily: {
        montThin: ["Montserrat-Thin"],
        mont: ["Montserrat-Regular"],
        montMedium: ["Montserrat-Medium"],
        montBold: ["Montserrat-Bold"],
        montSemiBold: ["Montserrat-SemiBold"],
        montBlack: ["Montserrat-Black"],
        montItalic: ["Montserrat-Italic"],
        montBlackItalic: ["Montserrat-BlackItalic"],
        montBold: ["Montserrat-Bold"],
        montBoldItalic: ["Montserrat-BoldItalic"],
        montExtraBold: ["Montserrat-ExtraBold"],
        montExtraBoldItalic: ["Montserrat-ExtraBoldItalic"],
        montExtraLight: ["Montserrat-ExtraLight"],
        montExtraLightItalic: ["Montserrat-ExtraLightItalic"],
        montLight: ["Montserrat-Light"],
        montLightItalic: ["Montserrat-LightItalic"],
        montMediumItalic: ["Montserrat-MediumItalic"],
        montSemiBoldItalic: ["Montserrat-SemiBoldItalic"],
        montThinItalic: ["Montserrat-ThinItalic"],
      },
    },
  },
  plugins: [],
}

