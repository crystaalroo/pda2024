import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions
} from '@mui/material/styles'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#6bc629',
      contrastText: '#000000'
    },
    secondary: {
      main: '#0D1B2A'
    },
    background: {
      default: '#6bc629',
      paper: '#6bc629'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#08274e',
      disabled: '#08274e'
    },
    divider: '#ffffff'
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontFamily: 'Chivo',
    h1: {
      fontFamily: 'Changa One',
      fontSize: '3.5rem',
      fontWeight: 300,
      lineHeight: 1.167
    },
    h2: {
      fontFamily: 'Changa One',
      fontSize: '3rem',
      fontWeight: 300,
      lineHeight: 1.2
    },
    h3: {
      fontFamily: 'Changa One',
      fontSize: '2.7rem',
      fontWeight: 400,
      lineHeight: 1.167
    },
    h4: {
      fontFamily: 'Changa One',
      fontSize: '2.125rem',
      fontWeight: 400,
      lineHeight: 1.235
    },
    h5: {
      fontFamily: 'Changa One',
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.334
    },
    h6: {
      fontFamily: 'Changa One',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6
    },
    body1: {
      fontFamily: 'Chivo',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '30px'
    },
    body2: {
      fontFamily: 'Chivo',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43
    },
    button: {
      fontFamily: 'Noto Sans',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75
    },
    caption: {
      fontFamily: 'Noto Sans',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66
    },
    overline: {
      fontFamily: 'Chivo',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 2.66
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.75
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    }
  }
}

export const theme = responsiveFontSizes(createTheme(themeOptions))
