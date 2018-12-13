export default {
    main: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        margin: "26px 0",
        "@media (max-width: 611px)": {
            justifyContent: "center",
            flexDirection: "column-reverse",
            flexWrap: "wrap"
        }
    },
    cancelButton: {
        color: "#3fa2f7",
        textDecoration: "underline",
        fontSize: "18px",
        fontWeight: 400,
        padding: 0,
        "&:hover": {
            textDecoration: "underline"
        }
    },
    payButton: {
        padding: "17px 70px",
        fontSize: "18px",
        "@media (max-width: 611px)": {
            width: "100%",
            marginBottom: "32px"
        }
    }
}