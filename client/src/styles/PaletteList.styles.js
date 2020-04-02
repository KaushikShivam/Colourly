import sizes from './sizes';

export default {
  root: {
    maxWidth: '1440px',
    width: '100%'
  },
  container: {
    marginTop: '3rem',
    width: '90%',
    margin: '0 auto'

    // [sizes.down('xl')]: {
    //   width: '80%'
    // },
    // [sizes.down('xs')]: {
    //   width: '75%'
    // }
  },
  palettes: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '2rem'
    // [sizes.down('md')]: {
    //   gridTemplateColumns: 'repeat(2, 50%)'
    // },
    // [sizes.down('xs')]: {
    //   gridTemplateColumns: 'repeat(1, 100%)'
    // }
  }
};
