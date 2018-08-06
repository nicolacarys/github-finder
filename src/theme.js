module.exports = {
  typography: {
    fonts: {
      heading: '"PT Serif", serif;',
      type: '"PT Sans", sans-serif;',
    },
    fontWeights: {
      heading: {
        normal: 400,
        bold: 700,
      },
      body: {
        normal: 400,
        bold: 700,
      },
    },
    h1: {
      font: 'heading',
      fontSize: 28,
    },
    h2: {
      font: 'heading',
      fontSize: 24,
    },
    h3: {
      font: 'heading',
      fontSize: 21,
    },
    p: {
      font: 'type',
      fontSize: 14,
    },
  },
  colors: {
    base: '#242424',
    light: '#7F8FA4',
    primary: '#00B3E3',
    success: '#36AF47',
    warning: '#FFC914',
    caution: '#FF9B42',
    danger: '#D62246',
    black: '#000000',
    white: '#ffffff',
  },
  breakpoints: {
    xs: 0,  // em
    sm: 30, // em
    md: 64, // em
    lg: 75, // em
  },
};
