export default {
    top: {
        minHeight: "71px",
        paddingLeft: "calc(50% - 305px)",
        paddingRight: "calc(50% - 305px)",
        backgroundColor: "#ffffff",
        boxShadow: "none",
        "@media (max-width: 611px)": {
            paddingLeft: 0,
            paddingright: 0,
        }
    },
    topContainer: {
        minHeight: "71px",
        maxWidth: "611px",
        padding: 0,
        justifyContent: "space-between",
        "@media (max-width: 611px)": {
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap"
        }
    },
    title: {
        color: "#5b5b5b",
        fontWeight: 400,
        fontSize: "16px"
    }
}