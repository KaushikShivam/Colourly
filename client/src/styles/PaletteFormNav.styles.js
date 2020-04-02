import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from './../constants';
import sizes from './sizes';

const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: '#A63352',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '6vh'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  navBtns: {
    marginRight: '1rem',
    [sizes.down('xs')]: {
      marginRight: '0.5rem'
    }
  },
  button: {
    margin: '0 0.5rem',
    backgroundColor: '#104573',
    color: 'white',
    [sizes.down('xs')]: {
      margin: '0 0.2rem',
      padding: '0.3rem'
    },
    '&:hover': {
      backgroundColor: '#104573'
    }
  },
  buttonCancel: {
    backgroundColor: '#D92929',
    color: 'white',

    '&:hover': {
      backgroundColor: '#D92929'
    }
  },
  link: {
    textDecoration: 'none'
  }
}));

export default useStyles;
