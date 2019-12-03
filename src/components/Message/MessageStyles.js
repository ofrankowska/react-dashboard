import sizes from '../../styles/sizes';

export default {
  Message: {
    fontSize: '48px',
    height: '70px',
    padding: '0px 30px',
    '&:hover svg': {
      opacity: 0.7,
      transition: 'opacity 0.3s ease-in',
    },
    [sizes.down('xm')]: {
      fontSize: '38px',
    },
    [sizes.down('xs')]: {
      padding: '0px 5px',
    },
  },
  editBtn: {
    position: 'absolute',
    padding: '10px',
    '& svg': {
      fontSize: '38px',
      opacity: 0,
      [sizes.down('xm')]: {
        fontSize: '28px',
      },
    },
  },
};
