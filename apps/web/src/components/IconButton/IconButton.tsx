import { Trash } from "phosphor-react";
import * as Styles from "./IconButton.styles"

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function IconButton(props: IconButtonProps) {
    return (
        <Styles.Container {...props}>
            <Trash />
        </Styles.Container>
    );
}