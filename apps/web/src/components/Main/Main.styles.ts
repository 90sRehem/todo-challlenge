import { styled } from "../../lib";

export const Container = styled("main", {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: "$12",
    padding: "$4",

    maxWidth: 736,
    width: "100%",
    height: "100%",
});
