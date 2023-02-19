import { styled } from "./lib";

export const Container = styled("div", {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: '200px 1fr',
    placeItems: 'center'
});