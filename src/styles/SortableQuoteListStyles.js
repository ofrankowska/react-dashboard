import sizes from "./sizes";

export default {
    colorBoxes: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridGap: "24px",
        margin: "24px",
        [sizes.down("lg")]: {
            gridTemplateColumns: "repeat(2,1fr)",
        },
        [sizes.down("xm")]: {
            gridTemplateColumns: "1fr",
            gridGap: "12px",
            margin: "12px",
        },
        [sizes.down("xs")]: {
            gridGap: "6px",
            margin: "6px",
        },
    },
    scrollableContainer: {
        overflowY: "auto",
        height: "91.2vh"
    }

}