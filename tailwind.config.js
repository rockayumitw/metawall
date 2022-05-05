module.exports = {
  mode: 'jit', // 開啟 jit(快速編譯)
  content: [
    './public/**/*.{html}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  purge: [ // 壓縮
    './public/**/*.{html}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '2md': '810px',
        '3md': '870px',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        black: '#000',
        green: '#83C51D',
        yellow: '#EEC32A',
        orange: '#FAA722',
        white: '#fff',
        red: '#DE4B63',
        danger: '#F57375',
        blue: {
          100: '#E2EDFA',
          200: '#A8B0B9',
          300: '#03438D',
        },
        gray: {
          100: '#EFECE7',
          200: '#CCCCCC',
          300: '#9B9893',
          400: '#808080',
          500: '#707070',
          600: '#000400',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        px: '1px',
        0: '0',
      },
      borderRadius: {
        none: 0,
      },
      height: {
        535: '535px',
        screen: '100vh',
      },
      borderWidth: {
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
      },
    },
  },
  variants: {
    bakcgroundColor: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
  ],
};
