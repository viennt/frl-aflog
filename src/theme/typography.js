import palette from './palette';

export default {
  fontFamily: 'Muli, sans-serif !important' ,
  fontSize: 14,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 2.14,
  letterSpacing: -0.28,

  button: {
    color: '#fefefe',
    backgroundColor: palette.primary.main,
    fontSize: 12,
    fontWeight: 800,
    borderRadius: 10,
    lineHeight: 2,
    letterSpacing: 1,
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
    border: `solid 1px ${palette.primary.main}`,
    '&:hover' : {
      color : palette.text.primary,
      boxShadow : 'none'
    }
  },

  h1: {
    color: palette.text.secondary,
    fontWeight: 900,
    fontSize: '42px',
    letterSpacing: '-0.84px',
    lineHeight: '50px'
  },
  // Main Heading
  h2: {
    color: palette.text.dark,
    fontWeight: 900,
    fontSize: 30,
    letterSpacing: '-0.6px',
    lineHeight: '36px'
  },
  // Sub Heading
  h3: {
    color: palette.text.secondary,
    fontWeight: 900,
    fontSize: 18,
    letterSpacing: '-0.36px',
    lineHeight: '36px'
  },
  h4: {
    color: palette.text.contrastText,
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '24px'
  },
  h5: {
    color: palette.black,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  h6: {
    color: palette.black,
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  // Card Title variants
  subtitle1: {
    color: palette.text.contrastText,
    fontSize: '16px',
    fontWeight: 800,
    letterSpacing: 'normal',
    lineHeight: '1.56em'
  },
  subtitle2: {
    fontSize: '14px',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: '1.43em',
    testTransform :'capitalize',
    display: 'flex',
    alignItems: 'center'
  },

  // Paragraphs
  body1: {
    color: palette.text.secondary,
    fontSize: '14px',
    letterSpacing: '-0.28px',
    lineHeight: '30px',
    fontWeight: 600
  },
  body2: {
    color : palette.text.secondary,
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: '-0.05px',
    lineHeight: '21px'
  },

  caption: {
    color: palette.text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px'
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '12px',
    fontWeight: 400,
    letterSpacing: '0.33px',
    lineHeight: '13px'
  }
};
