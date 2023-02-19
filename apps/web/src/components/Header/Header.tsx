import { Container } from "./Header.styles";
import logo from "../../assets/logo.svg"

export function Header() {
    return (
        <Container>
            <img src={logo} alt="Logo" />
        </Container>
    );
}