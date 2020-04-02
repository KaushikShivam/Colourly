import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from './../constants';

const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    padding: '0 8px',
    justifyContent: 'flex-end',
    minHeight: '6vh',
    height: '6vh'
  },
  content: {
    flexGrow: 1,
    height: '94vh',
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  designTitle: {
    color: '#104573'
  },
  btns: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  btn1: {
    backgroundColor: '#D92929',
    color: 'white',
    '&:hover': {
      backgroundColor: '#D92929'
    }
  },
  btn2: {
    backgroundColor: '#104573',
    color: 'white',
    '&:hover': {
      backgroundColor: '#104573'
    }
  }
}));

export default useStyles;
