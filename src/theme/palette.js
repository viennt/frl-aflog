import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  text: {
    primary: '#5d65ee',
    secondary: '#333333',
    light: '#aaaaaa',
    dark : '#000',
    link: white,
    grey: '#666666',
    contrastText: white,
  },
  primary: {
    contrastText: white,
    light: 'rgba(85, 93, 240,0.15)',
    main: '#5d65ee',
    dark : '#454eee'
  },
  secondary: {
    contrastText: white,
    dark: colors.grey[900],
    main: colors.grey['A400'],
    light: colors.grey['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  background: {
    default: '#F4F6F8',
    light:'#fafafa',
    dark : '#000000',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
