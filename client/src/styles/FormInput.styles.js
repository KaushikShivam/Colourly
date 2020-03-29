export default {
  formLabel: {
    display: 'block',
    fontSize: '1.6rem',
    fontWeight: 700,
    marginBottom: '0.75rem'
  },

  formInput: {
    display: 'block',
    fontFamily: 'inherit',
    fontSize: '1.5rem',
    color: 'inherit',
    padding: '1.25rem 1.75rem',
    border: 'none',
    width: '100%',
    backgroundColor: '#fff',
    backgroundColor: '#f2f2f2',
    borderTop: '3px solid transparent',
    borderBottom: '3px solid transparent',
    WebkitTransition: 'all 0.3s',
    transition: 'all 0.3s',
    borderRadius: 4,
    WebkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
    '&:focus': {
      outline: 'none',
      borderBottom: '3px solid#69BFB7'
    },
    '&:focus:invalid': {
      borderBottom: '3px solid #ff7730'
    },
    '&::-webkit-input-placeholder': {
      color: '#bbb'
    }
  }
};
