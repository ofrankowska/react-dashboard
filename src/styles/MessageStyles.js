export default {
    Message: {
        fontSize: "48px",
        height: "70px",

        "&:hover svg": {
            opacity: 0.7,
            transition: "opacity 0.3s ease-in"
        }
    },
    textField: {
        "& input, label": {
            color: "white",
            fontWeight: 500,
        },
        "& label:active": {
            color: "white",
            fontSize: "25px",

        },
        "& label.MuiFormLabel-filled": {
            display: "none",
        },

        '& label.Mui-focused': {
            color: 'white',
            fontSize: "25px",
        },
        '& .MuiInput-underline:after:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
    userNameField: {
        width: 430,
        bottom: "21px",
        "& input": {
            textAlign: "left",
            fontSize: "48px",
        },
        "& label": {
            fontSize: "48px",
        },
    },
    editBtn: {
        position: "absolute",
        padding: "10px",
        "& svg": {
            fontSize: "38px",
            opacity: 0
        }
    }
}