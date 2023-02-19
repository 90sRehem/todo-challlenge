import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from "../../lib";

const slideIn = keyframes({
    from: {
        transform: 'translateY(-100%)',
    },
    to: {
        transform: 'translateY(0)',
    },
})

const slideOut = keyframes({
    from: {
        transform: 'translateY(0)',
    },
    to: {
        transform: 'translateY(-100%)',
    },
})

export const Container = styled(Checkbox.Root, {
    all: 'unset',
    width: '$5',
    height: '$5',
    backgroundColor: 'transparent',
    borderRadius: '$full',
    lineHeight: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid $blue',

    '&[data-state="checked"]': {
        background: '$purple',
        border: '2px solid $purple',
    },

    "&:hover": {
        background: '$blue-dark',
        opacity: 0.2,
    },
})

export const Indicator = styled(Checkbox.Indicator, {
    color: '$gray-100', 
    width: '$4',
    height: '$4',

    '&[data-state="checked"]': {
        animation: `${slideIn} 200ms ease-out`,
    },

    '&[data-state="unchecked"]': {
        animation: `${slideOut} 200ms ease-out`,
    },

    "&:hover": {
        opacity: 0.9,
    },
})