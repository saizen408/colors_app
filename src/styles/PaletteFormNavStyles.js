import { DRAWER_WIDTH } from '../constants';
import sizes from './sizes';
import bg3 from './bg3.svg';

const drawerWidth = DRAWER_WIDTH;
const styles = theme => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  appBar: {
    backgroundColor: '#e4e8e9',
    backgroundImage: `url(${bg3})`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    '& h6': {
      fontWeight: 700
    }
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
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none'
    },
    [sizes.down('xs')]: {
      marginRight: '0.5rem'
    }
  },
  button: {
    margin: '0 0.5rem',
    [sizes.down('xs')]: {
      margin: '0, 0.2rem',
      padding: '0.3rem'
    }
  }
});

export default styles;
