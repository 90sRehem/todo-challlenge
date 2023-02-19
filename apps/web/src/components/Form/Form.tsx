import * as Styles from "./Form.styles";

type IFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function Form({children, ...rest}: IFormProps) {
  return (
    <Styles.Form {...rest}>
      {children}
    </Styles.Form>
  )
}