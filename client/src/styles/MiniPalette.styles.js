export default {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: '#D7D8D9',
    height: '100px',
    overflow: 'hidden',
    borderRadius: '5px'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    fontWeight: 'medium',
    position: 'relative',
    color: '#0A3459'
  },
  author: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#104573',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  miniColor: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    position: 'relative',
    float: 'left'
  },
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '0px',
    right: '0px',
    padding: '10px',
    borderRadius: '5px',

    zIndex: 10,
    opacity: 0,
    transition: 'all 0.3s ease-in-out'
  }
};
