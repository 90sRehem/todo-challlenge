import { ClipboardText, Trash } from "phosphor-react";
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
    minWidth: 736,
    height: 244,

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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: "$3",

    backgroundColor: "$gray-500",

    border: "1px solid $gray-400",

    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.86)",
    borderRadius: "$md",

    padding: "$4",

    minWidth: 736,

    minHeight: 72,
    maxHeight: 72,

    "& label": {
        fontFamily: '$default',
        fontStyle: 'normal',
        fontWeight: "$regular",
        fontSize: "$sm",
        lineHeight: "$default",

        maxWidth: 632,
        maxHeight: 72,

        color: "$gray-100",
    },

    // "& button": {
    //     width: "$6",
    //     height: "$6",
    // },

    // "& svg": {
    //     width: "$6",
    //     height: "$6",
    // },
});

// export const Icon = styled(Trash, {
//     width: "$6",
//     height: "$6",
// });