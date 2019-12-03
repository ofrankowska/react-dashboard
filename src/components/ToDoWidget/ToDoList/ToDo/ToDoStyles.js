export default {
    ToDo: {
        display: "flex",
        justifyContent: "space-between"
    },
    listItem: {
        listStyleType: "none",
        display: "flex",
        position: "relative",
        marginBottom: "12px",
        cursor: "default",
    },
    task: {
        textDecoration: props => props.checked ? "line-through" : "none",
        color: props => props.checked ? "gray" : "white",
        transition: "color 0.3s ease-in",
        fontSize: "16px",
        textShadow: "none",
        paddingLeft: "25px",
    },
    textInput: {
        background: "none",
        border: "none",
        color: "white",
        fontSize: "16px",
        padding: 0,
        paddingLeft: "25px",
    },
    checkboxInput: {
        position: "absolute",
        opacity: 0,
        cursor: "pointer",
        height: "16px",
        width: "16px",
        zIndex: 100,
        margin: 0
    },
    checkmark: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "16px",
        width: "16px",
        backgroundColor: props => props.checked ? "#5CA19E" : "#eee",
        transition: "background-color 0.3s ease-in 0.1s",
        borderRadius: "2px",
        "&:hover": {
            backgroundColor: "#C6DEDE"
        },
    },
    checked: {
        content: "",
        position: "absolute",
        opacity: props => props.checked ? 1 : 0,
        transition: "opacity 0.1s ease-in",
        left: "5px",
        top: "2px",
        width: "3px",
        height: "8px",
        border: "solid white",
        borderWidth: "0 3px 3px 0",
        transform: "rotate(45deg)",
    },
    btn: {
        color: "white",
        "&:hover": {
            color: "aquamarine",
            transition: "color 0.3s ease-in"
        }
    }

}