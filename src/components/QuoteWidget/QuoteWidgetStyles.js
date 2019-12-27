import sizes from '../../styles/sizes';

export default {
  QuoteWidget: {
    transform: 'translateY(35px)',
    transition: 'transform 0.4s ease-in',
    [sizes.down('xm')]: {
      transform: 'translateY(0)',
    },
    '&:hover': {
      transform: 'translateY(0)',
    },
    '& button': {
      opacity: 0,
      transform: 'translateY(-10px)',
      transition: 'all 0.4s ease-in',
      [sizes.down('xm')]: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    '&:hover button': {
      transform: 'translateY(0)',
      opacity: 0.9,
    },
    '&:hover button:hover': {
      opacity: 1,
    },
  },
  icon: {
    padding: 0,
    margin: 0,
  },
};
