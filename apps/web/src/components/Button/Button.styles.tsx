import { styled } from "../../lib";

export const Button = styled('button', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "$4",
    gap: "$2",

    fontFamily: '$default',
    fontStyle: 'normal',
    fontWeight: "$bold",
    fontSize: '$sm',
    lineHeight: "$default",
    color: "$gray-100",

    width: 90,
    height: 54,

    background: "$blue-dark",
    borderRadius: "$md",

    border: 'none',
    outline: 'none',
    transition: 'background 0.2s',

    "&:not(:disabled):hover": {
        background: "$blue",
    },

    "&:disabled": {
        cursor: 'not-allowed',
        background: "$gray-300",
    },

    "@media (max-width: 768px)": {
        width: "100%"
    },    
})