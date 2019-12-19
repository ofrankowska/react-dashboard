import sizes from '../../styles/sizes';

export default {
  Focus: {
    fontSize: '30px',
    height: '111px',
    display: 'flex',
    flexDirection: 'column',
    [sizes.down('xs')]: {
      fontSize: '25px',
    },
  },
};
