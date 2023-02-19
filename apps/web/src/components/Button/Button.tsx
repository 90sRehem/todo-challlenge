import { PlusCircle } from "phosphor-react";
import * as Styles from "./Button.styles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({children, ...rest}: ButtonProps) {
  return (
    <Styles.Button {...rest}>
      {children}
      <PlusCircle size={16} />
    </Styles.Button>
  )
}