import * as Styles from "./Form.styles";

type IFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function Form({ children, ...rest }: IFormProps) {
  return (
    <Styles.Form {...rest}>
      <Styles.FormContent>
        {children}
      </Styles.FormContent>
    </Styles.Form>
  )
}