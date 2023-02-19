import { ComponentProps } from "@stitches/react";
import * as Styles from "./Checkbox.styles"
import { Check } from "phosphor-react";

interface ICheckboxProps
    extends ComponentProps<typeof Styles.Container> { }

export function Checkbox(props: ICheckboxProps) {
    return (
        <Styles.Container {...props}>
            <Styles.Indicator>
                <Check weight="bold" />
            </Styles.Indicator>
        </Styles.Container>
    );
}