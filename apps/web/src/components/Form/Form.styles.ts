import { styled } from "@stitches/react";

export const Form = styled("form", {
    marginTop: -42,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: "$1",
    width: "100%",
    height: "100%",
});

export const FormContent = styled("div", {
    display: 'flex',
    gap: '$2',
    width: '100%',

    "@media (max-width: 768px)": {
        flexDirection: 'column',
    },
});