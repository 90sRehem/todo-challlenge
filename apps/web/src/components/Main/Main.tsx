import { PropsWithChildren } from "react";
import { Container } from "./Main.styles";

type IMainProps = PropsWithChildren

export function Main({children}: IMainProps) {
    return (
        <Container>
           {children}
        </Container>
    );
}