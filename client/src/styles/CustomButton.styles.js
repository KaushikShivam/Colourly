export default {
  btn: {
    fontSize: '1rem',
    padding: '1rem 3rem',
    textTransform: 'uppercase',
    display: 'inline-block',
    textDecoration: 'none',
    position: 'relative',
    WebkitTransition: 'all 0.4s',
    transition: 'all 0.4s',
    fontWeight: 400,
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    borderRadius: 4,

    /*Add later when we use this for the button in form*/
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#104573',
    color: '#fff',
    '&:hover': {
      WebkitTransform: 'translateY(-3px)',
      transform: 'translateY(-3px)',
      WebkitBoxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.15)',
      boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.15)'
    },
    '&:active': {
      WebkitTransform: 'translateY(-1px)',
      transform: 'translateY(-1px)',
      WebkitBoxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
      boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: '#579993'
    }
  }
};
