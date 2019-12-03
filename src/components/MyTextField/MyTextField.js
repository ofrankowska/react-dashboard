import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import sizes from '../../styles/sizes';

const MyTextField = withStyles({
  root: {
    width: ({ big }) => (big ? 430 : 400),
    bottom: ({ big }) => big && '21px',
    [sizes.down('xm')]: {
      width: ({ big }) => big && 335,
    },
    [sizes.down('xs')]: {
      width: 335,
    },
    '& input': {
      fontSize: ({ big }) => (big ? '48px' : '30px'),
      textAlign: ({ big }) => (big ? 'left' : 'center'),
      [sizes.down('xs')]: {
        fontSize: ({ big }) => big && '25px',
      },
      [sizes.down('xm')]: {
        fontSize: ({ big }) => big && '30px',
      },
    },
    '& label': {
      fontSize: ({ big }) => (big ? '48px' : '30px'),
      [sizes.down('xs')]: {
        fontSize: ({ big }) => big && '25px',
      },
      [sizes.down('xm')]: {
        fontSize: ({ big }) => big && '38px',
      },
    },
    '& input, label': {
      color: 'white',
      fontWeight: 500,
    },
    '& label:active': {
      color: 'white',
      fontSize: '25px',
    },
    '& label.MuiFormLabel-filled': {
      display: 'none',
    },

    '& label.Mui-focused': {
      color: 'white',
      fontSize: '25px',
    },
    '& .MuiInput-underline:before': {
      borderBottom: 'solid 3px white',
    },
    '& .MuiInput-underline:after': {
      borderBottom: 'solid 3px white',
    },
  },
})(TextField);

export default MyTextField;
