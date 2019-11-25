export default {
    QuoteWidget: {
        transform: "translateY(35px)",
        transition: "transform 0.4s ease-in",
        "&:hover": {
            transform: "translateY(0)",

        },
        "& button": {
            opacity: 0,
            transform: "translateY(-10px)",
            transition: "all 0.4s ease-in"
        },
        "&:hover button": {
            transform: "translateY(0)",
            opacity: 0.9,
        },
        "&:hover button:hover": {
            opacity: 1
        },
    },
    icon: {
        padding: 0, 
        margin: 0
    }
}