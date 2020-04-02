export default {
  Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '6vh',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    }
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
      alignItems: 'center'
    },
    '& img': {
      width: '1.5rem',
      height: '1.5rem',
      marginRight: '10px'
    }
  },
  links: {
    fontSize: '18px',
    padding: '0 13px;',
    fontWeight: 'bold',
    '& a': {
      color: 'white',
      textDecoration: 'none',
      marginLeft: '13px'
    }
  }
};
