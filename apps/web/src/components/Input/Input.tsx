import * as Styles from "./Input.styles"
import { forwardRef, ForwardRefRenderFunction } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    errorMessage?: string;
}

const CustomInput: ForwardRefRenderFunction<
    HTMLInputElement,
    InputProps
> = ({
    name,
    placeholder,
    errorMessage,
    ...rest },
    ref) => {
        return (
            <Styles.Container>
                <Styles.Input name={name} placeholder={placeholder} ref={ref} {...rest} />
                <Styles.ErrorMessage htmlFor={name} data-visible={!!errorMessage}>{errorMessage}</Styles.ErrorMessage>
            </Styles.Container>
        )
    }

export const Input = forwardRef(CustomInput)