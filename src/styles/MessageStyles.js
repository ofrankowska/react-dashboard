import sizes from "./sizes";

export default {
    Message: {
        fontSize: "48px",
        height: "70px",
        padding: "0px 30px",
        "&:hover svg": {
            opacity: 0.7,
            transition: "opacity 0.3s ease-in"
        },
        [sizes.down("xm")]: {
            fontSize: "38px",
        },
        [sizes.down("xs")]: {
            padding: "0px 5px",
        },
        

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
            [sizes.down("xm")]: {
                display: "none",
            },
    
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
        [sizes.down("xm")]: {
            width: 335,
        },
        "& input": {
            textAlign: "left",
            fontSize: "48px",
            [sizes.down("xm")]: {
                fontSize: "38px",
            },
        },
        "& label": {
            fontSize: "48px",
            [sizes.down("xm")]: {
                fontSize: "38px",
            },
        },
    },
    editBtn: {
        position: "absolute",
        padding: "10px",
        "& svg": {
            fontSize: "38px",
            opacity: 0,
            [sizes.down("xm")]: {
                fontSize: "28px",
            },
        }
    }
}