import sizes from './sizes';
export default {
  PaletteFooter: {
    color: 'white',
    backgroundColor: '#A63352',
    height: '5vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    padding: '0 1rem',
    [sizes.down('sm')]: {
      height: '3vh'
    }
  },
  user: {
    '& a': {
      fontSize: '1rem',
      textDecoration: 'none',
      color: 'rgba(255,255,255,0.9)',
      '&:hover': {
        color: 'white'
      }
    }
  }
};
