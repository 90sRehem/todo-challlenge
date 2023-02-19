import { styled } from "@stitches/react";

export const Form = styled("form", {
    marginTop: -42,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 8,

    width: "100%",
    height: "100%",

    "@media (max-width: 768px)": {
        flexDirection: 'column',
    },
});