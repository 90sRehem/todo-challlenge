import * as Styles from "./Input.styles"
import { forwardRef, ForwardRefRenderFunction } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    placeholder: string
}

const CustomInput: ForwardRefRenderFunction<
    HTMLInputElement,
    InputProps
> = ({ name, placeholder, ...rest }, ref) => {
    return (
        <Styles.Input name={name} placeholder={placeholder} ref={ref} {...rest} />
    )
}

export const Input = forwardRef(CustomInput)