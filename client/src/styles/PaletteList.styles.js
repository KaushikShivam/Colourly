import sizes from './sizes';

export default {
  root: {
    maxWidth: '1440px',
    width: '100%'
  },
  container: {
    marginTop: '3rem',
    marginBottom: '3rem',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 3rem',

    [sizes.down('lg')]: {
      marginTop: '2rem',
      marginBottom: '2rem',
      padding: '0 2rem'
    },
    [sizes.down('xs')]: {
      marginTop: '1rem',
      marginBottom: '1rem',
      padding: '0 1rem'
    }
  },
  palettes: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '2rem',
    [sizes.down('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '1.5rem'
    },
    [sizes.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridGap: '1rem'
    }
  }
};
