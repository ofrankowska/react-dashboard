export default {
    FocusCheckbox: {
        "& svg": {
            opacity: props => props.checked ? 1 : 0,
            transition: "opacity 0.3s ease-in",
        },
        "&:hover svg": {
            opacity: 1,
        }
    },
    checkboxFormTitle: {
        margin: 0
    },
    checkboxForm: {
        marginRight: 0,

        "& .MuiFormControlLabel-label": {
            fontSize: "25px",
            fontWeight: 400,
            textDecoration: props => props.checked ? "line-through" : "none",
        },
    },
    checkbox: {
        "& svg": {
            color: "white",
            opacity: 1,
            width: "30px",
            height: "30px",

        },
    },
    helperText: {
        fontSize: "18px",
        fontWeight: 400,
        marginTop: "5px",
        marginBottom: 0,
        opacity: 0,
    },
    showHelperText: {
        animation: "$fade-in-out 3.5s"
    },
    "@keyframes fade-in-out": {
        "20%": {
            opacity: 1,
        },
        "80%": {
            opacity: 1,
        },
        "100%": {
            opacity: 0,

        }
    }
}