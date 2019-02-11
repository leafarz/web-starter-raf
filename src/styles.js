export default (theme) => ({
  aboveDialog: {
    zIndex: 1301
  },
  addButton: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  brightButton: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: theme.palette.primary.bright,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.brightHover,
    },
  },
  centered: {
    textAlign: 'center'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 2}px`,
  },
  errorText: {
    color: 'red',
  },
  formattedText: {
    whiteSpace: 'pre-wrap'
  },
  grow: {
    flexGrow: 1
  },
  list: {
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
  },
  loadingSpinner: {
    margin: theme.spacing.unit
  },
  logo: {
    fontFamily: 'Brush Script MT, SavoyeLetPlain',
  },
  page: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    caretColor: theme.palette.secondary.main
  },
  signInRoot: {
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    '& a': {
      color: theme.palette.secondary.main,
    }
  },
  signInLogo: {
    color: theme.palette.common.white,
    position: 'absolute',
    top: theme.spacing.unit * 4,
    left: theme.spacing.unit * 2,
    transform: 'rotate(-20deg)'
  },
  successText: {
    color: 'green',
  },
  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});
