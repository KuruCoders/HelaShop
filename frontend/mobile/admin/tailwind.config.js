/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}","./constants/**/*.{js,jsx,ts,tsx}","./navigation/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat-Regular"],
        montBold: ["Montserrat-Bold"],
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
        montMedium: ["Montserrat-Medium"],
        montMediumItalic: ["Montserrat-MediumItalic"],
        montSemiBold: ["Montserrat-SemiBold"],
        montSemiBoldItalic: ["Montserrat-SemiBoldItalic"],
        montThin: ["Montserrat-Thin"],
        montThinItalic: ["Montserrat-ThinItalic"],
      },      
    },
  },
  plugins: [],
}

