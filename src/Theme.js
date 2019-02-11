import { createMuiTheme } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const DEFAULT_SPACING = 8;

const palette = {
  common: {
    black: '#000',
    white: '#FFF',
  },
  background: {
    paper: '#fff',
    default: '#fbf8f5'
  },
  primary: {
    light: '#462864',
    main: '#231632',
    dark: 'rgba(32, 22, 44, 1)',
    contrastText: '#fff',
    bright: '#8930fd',
    brightHover: emphasize('#8930fd', 0.15)
  },
  secondary: {
    light: '#ff4081',
    main: '#ff146e',
    dark: '#c51162',
    contrastText: '#fff'
  },
  error: {
    light: '#E57373',
    main: '#D0021B',
    dark: '#D32F2F',
    contrastText: '#fff'
  },
  text: {
    primary: '#231632',
    secondary: '#bcbabf',
    disabled: 'rgba(0, 0, 0, 1)',
    hint: 'rgba(218, 212, 237, 1)'
  },
  button: {
    standard: '#dfdaf0',
  }
};

export default createMuiTheme({
  palette,
  spacing: {
    unit: DEFAULT_SPACING
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiDivider: {
      root: {
        margin: `0px ${DEFAULT_SPACING * 2}px`
      }
    },
    MuiSpeedDialAction: {
      button: {
        color: palette.primary.main,
        backgroundColor: palette.button.standard,
        '&:hover': {
          backgroundColor: emphasize(palette.button.standard, 0.15),
        },
      }
    },
    MuiChip: {
      root: {
        backgroundColor: palette.button.standard,
      },
      colorPrimary: {
        backgroundColor: palette.primary.light,
        '&:hover': {
          backgroundColor: emphasize(palette.primary.light, 0.15),
        },
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: palette.button.standard,
        color: palette.text.primary
      },
      containedPrimary: {
        backgroundColor: palette.primary.light,
        '&:hover': {
          backgroundColor: emphasize(palette.primary.light, 0.15),
        },
      }
    },
    MuiIconButton: {
      colorPrimary: {
        color: palette.primary.light
      }
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: palette.button.standard,
        color: palette.primary.main
      },
    }
  }
});
