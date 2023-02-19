import { styled } from "../../lib";

export const Input = styled('input', {
  display: "flex",
  flex: 1,
  alignItems: "center",
  padding: "$4",
  gap: "$2",

  width: "100%",

  background: "$gray-500",

  borderRadius: "$md",
  outline: 'none',
  border: 'none',
  boxShadow: '0 0 0 1px $colors$gray-500',
  transition: "box-shadow 0.2s",

  fontFamily: '$default',
  fontSize: '$md',
  color: '$gray-100',
  fontWeight: 'regular',

  '&:focus': {
    boxShadow: '0 0 0 1px $colors$purple-dark',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
