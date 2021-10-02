module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#371CE3',
        'white-bg': '#F5F7F9',
        'white-line': '#D6D8E7',
        'text': '#1B1B1B',
        'text-second': '#62687F',
        'text-main': '#2E3554',
        error: '#F03738',
      },
      flexGrow: {
        '1': 1.5,
        '3': 3,
      },
      fill: {
        green: '',
      },
      boxShadow: {
        DEFAULT: '0 0 0 0 rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(0, 0, 0, 0.06)'
      }
    },
  },
  variants: {
    extend: {},
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
