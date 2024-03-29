import { styled } from "../../lib";

export const Container = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    width: '100%',
    maxWidth: 736,

    gap: "$6",
});

export const Summary = styled("div", {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    width: '100%',

    "& strong": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "$2",

        fontFamily: '$default',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: "$sm",
        lineHeight: '17px',
    },
    "& strong:first-of-type": {
        color: "$blue",
    },
    "& strong:last-of-type": {
        color: "$purple",
    }
});

export const Badge = styled("p", {
    width: "auto",
    padding: "$0 $2",
    fontWeight: "bold",
    borderRadius: "999px",
    color: "$colors$gray-200",
    backgroundColor: "$colors$gray-400",
    display: "inline-block",
});

export const List = styled("ul", {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: "$4",

    width: '100%',

    padding: "$1",

    borderRadius: "$md",
    borderTop: "2px solid $colors$gray-400",
    outline: "none",
});

export const EmptyList = styled("div", {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: "$4",

    width: '100%',
    height: '100%',

    padding: "$16 $6",

    textAlign: 'center',

    "& p": {
        fontFamily: '$default',
        fontStyle: 'normal',
        fontSize: "$md",
        lineHeight: "$default",

        color: "$gray-400",
    },

    "& strong": {
        display: "block",
    },

    "& svg": {
        color: "$gray-400",
        width: "calc($12 + 0.5rem)",
        height: "calc($12 + 0.5rem)",
    },
});

export const Item = styled("li", {
    width: '100%',
});

export const Card = styled("div", {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: "$4",
    gap: "$3",

    backgroundColor: "$gray-500",

    border: "1px solid $gray-400",

    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.86)",
    borderRadius: "$md",


    width: "100%",
    minHeight: 72,

    "& label": {
        fontFamily: '$default',
        fontStyle: 'normal',
        fontWeight: "$regular",
        fontSize: "$sm",
        lineHeight: "$default",

        maxWidth: 632,
        width: "90%",

        color: "$gray-100",

        lineBreak: "anywhere",

        "&[data-checked=true]": {
            textDecoration: "line-through",
            color: "$gray-300",
        },
        "&[data-visible=true]": {
            display: "none",
        },
    },

    "& input": {
        "&[data-visible=false]": {
            display: "none",
        },
    },
});