module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    boxShadow: {
      dark: '0 0 10px 0px rgba(34, 60, 80, 0.24)',
      light: '0px 0px 10px 0px rgba(255, 255, 255, 1)'
    },
    extend: {
      colors: {
        primary: '#371CE3',
        'white-bg': '#F5F7F9',
        'black-bg': '#282828',
        'white-line': '#D6D8E7',
        'black-line': '#1B1B1B',
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
      }

    },
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    },
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
