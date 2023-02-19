import { styled } from "../../lib";

export const Container = styled("button", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "$6",
    height: "$6",
    borderRadius: "$xs",

    "& svg": {
        width: "$6",
        height: "$6",
        color: "$gray-300",
    },

    "&:hover": {
        backgroundColor: "$gray-400",
        "& svg": {
            color: "$colors$danger",
        },
    },
});