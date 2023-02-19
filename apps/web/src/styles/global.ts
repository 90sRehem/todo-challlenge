import { globalCss } from "../lib/stitches"

export const globalStyles = globalCss({
    body: {
        margin: 0,
        padding: 0,
        fontFamily: "$default",
        fontSize: "$md",
        lineHeight: "$default",
        color: "$gray-700",
        backgroundColor: "$gray-600",
    },
    "*, *::before, *::after": {
        boxSizing: "border-box",
    },
    "h1, h2, h3, h4, h5, h6": {
        margin: 0,
        padding: 0,
        fontWeight: "$bold",
    },
    "h1": {
        fontSize: "2rem",
    },
    "h2": {
        fontSize: "1.5rem",
    },
    "h3": {
        fontSize: "1.25rem",
    },
    "h4": {
        fontSize: "1rem",
    },
    "h5": {
        fontSize: "0.875rem",
    },
    "h6": {
        fontSize: "0.75rem",
    },
    "p": {
        margin: 0,
        padding: 0,
    },
    "a": {
        color: "$blue",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    "ul": {
        margin: 0,
        padding: 0,
        listStyle: "none",
    },
    "button": {
        padding: 0,
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
    },
    "input": {
        padding: 0,
        border: "none",
        backgroundColor: "transparent",
    },
    "textarea": {
        padding: 0,
        border: "none",
        backgroundColor: "transparent",
    },
    "img": {
        display: "block",
        maxWidth: "100%",
        height: "auto",
    },
    "svg": {
        display: "block",
        maxWidth: "100%",
        height: "auto",
    },
})