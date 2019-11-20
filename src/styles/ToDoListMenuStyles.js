export default {
    button: {
        padding: 0,
        color: "white",
        fontSize: "16px",
        "&:hover": {
            color: "aquamarine",
            transition: "color 0.3s ease-in"
        }
    },
    menu: {
        "& div.MuiPopover-paper": {
            backgroundColor: "#2E2E2E",
            color: "white",
            width: "200px"
        },
        "& .Mui-selected":{
            color: "aquamarine",
            background: "rgba(0,0,0,0.3)"
        }
    },
    menuItem: {
        display: "flex",
        justifyContent: "space-between",
        "&:hover": {
            color: "aquamarine",
            transition: "color 0.3s ease-in"
        },
        
    },
    number: {
        color: "gray"
    }
}