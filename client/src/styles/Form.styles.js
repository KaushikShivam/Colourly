import sizes from './sizes';

export default {
  main: {
    backgroundColor: '#A63352',
    padding: '6rem 6rem',
    [sizes.down('sm')]: {
      padding: '3rem 3rem'
    },
    [sizes.down('xs')]: {
      padding: '1.5rem 1.5rem'
    }
  },

  authContainer: {
    margin: '0 auto',
    maxWidth: '40rem',
    backgroundColor: '#fff',
    boxShadow: '0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06)',
    padding: '3rem 3rem',
    borderRadius: 5,
    [sizes.down('xs')]: {
      padding: '1.5rem 1.5rem'
    }
  },
  formHeading: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    color: '#104573',
    letterSpacing: '0.1rem',
    lineHeight: 1.3,
    display: 'inline-block'
  }
};
