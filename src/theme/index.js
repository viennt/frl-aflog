import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const theme = createMuiTheme({
  palette,
  typography,
  // overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "12px",
        color: "#000",
        backgroundColor: "#fff",
        boxShadow:' 1px 1px 8px 2px #ccc'
      }
    }
  }
});

export default theme;
