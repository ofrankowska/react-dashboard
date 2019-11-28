import sizes from "../../styles/sizes";

export default {
  Focus: {
    fontSize: "30px",
    height: "111px",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    [sizes.down("xs")]: {
      fontSize: "25px"
    }
  },
  textField: {
    "& input, label": {
      color: "white",
      fontWeight: 500
    },
    "& label:active": {
      color: "white",
      fontSize: "25px"
    },
    "& label.MuiFormLabel-filled": {
      display: "none"
    },

    "& label.Mui-focused": {
      color: "white",
      fontSize: "25px"
    },
    "& .MuiInput-underline:after:before": {
      borderBottomColor: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  },
  focusField: {
    width: 400,
    [sizes.down("xs")]: {
      width: 335
    },
    "& input": {
      fontSize: "30px",
      textAlign: "center",
      [sizes.down("xs")]: {
        fontSize: "25px"
      }
    },
    "& label": {
      fontSize: "30px",
      [sizes.down("xs")]: {
        fontSize: "25px"
      }
    }
  }
};
