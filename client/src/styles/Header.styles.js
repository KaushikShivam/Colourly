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
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  links: {
    fontSize: '18px',
    padding: '0 13px;',
    '& a': {
      textDecoration: 'none',
      color: 'black',
      marginLeft: '13px'
    }
  }
};
