import sizes from './sizes';

export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
    color: 'white'
  },

  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    '& a': {
      fontWeight: 'bold',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    },
    '& img': {
      width: '1.5rem',
      height: '1.5rem',
      marginRight: '10px'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
    color: 'white'
  },
  select: {
    color: 'white',
    '&:before': {
      borderColor: 'white'
    },
    '&:after': {
      borderColor: 'white'
    }
  },
  icon: {
    fill: 'white'
  },

  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& .rc-slider-track': {
      backgroundColor: 'white'
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus': {
      backgroundColor: '#104573',
      outline: 'none',
      border: '2px solid #104573',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginTop: '-3px'
    },
    [sizes.down('md')]: {
      width: '150px'
    }
  }
};
