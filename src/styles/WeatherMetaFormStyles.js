export default {
    content: {
        paddingBottom: "50px"
    },
    alert: {
        backgroundColor: "rgba(255, 0, 0, 0.7)",
        padding: "10px",
        borderRadius: "10px",
        color: 'white',
        animation: "$fade-in 0.7s ease-out",
    },
    "@keyframes fade-in": {
        "0%": { opacity: 0, transform: "translateY(-40px)" },
        "30%": { transform: "translateY(20px)" },
        "50%": { transform: "translateY(0)" },
        "100%": { opaity: 1 }
    },
    input: {
        "& label:active, label.Mui-focused": {
            color: "#5CA19E",
        },
        '& label.Mui-focused': {
            color: '#5CA19E',
        },
        '& .MuiInput-underline:after:before': {
            borderBottomColor: '#5CA19E',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#5CA19E',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#5CA19E',
            },
        },
    },
    submitBtn: {
        backgroundColor: "rgb(45, 47, 56)",
        color: "white"
    },
    cancelBtn: {
        backgroundColor: "#5CA19E",
        color: "white"
    }
}