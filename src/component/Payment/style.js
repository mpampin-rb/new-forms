export default {
    externalBorder: {
        marginTop: "32px",
        maxWidth: "611px",
        left: "calc(50% - 305px)",
        position: "relative",
        "@media (max-width: 611px)": {
            width: "100%",
            left: 0,
            marginTop: "6px",
            borderRadius: 0
        }
    },
    externalPaper: {
        borderRadius: "8px",
        padding: 0
    },
    main: {
        padding: "35px 60px",
        "@media (max-width: 611px)": {
            padding: "22px 30px"
        }
    },
    subtitle: {
        fontSize: "1.2rem",
        color: "#475b81"
    }
}