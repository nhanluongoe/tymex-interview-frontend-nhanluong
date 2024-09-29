import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { pink } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

const FilledButton = styled(Button)<Omit<MuiButtonProps, 'variant'>>(
    ({ theme }) => ({
        color: 'white',
        backgroundColor: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%);`,
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    })
)

const TextButton = styled(Button)<Omit<MuiButtonProps, 'variant'>>(() => ({
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
        color: pink[400],
    },
}))

const OutlinedButton = styled(Button)<Omit<MuiButtonProps, 'variant'>>(
    ({ theme }) => ({
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        borderColor: theme.palette.primary.main,
        '&:hover': {
            borderColor: theme.palette.primary.dark,
        },
    })
)

const BUTTON_VARIANTS = {
    contained: FilledButton,
    text: TextButton,
    outlined: OutlinedButton,
}

function CustomizedButton(props: MuiButtonProps) {
    const { variant = 'contained', ...restProps } = props

    const ButtonComponent = BUTTON_VARIANTS[variant]

    return <ButtonComponent variant={variant} {...restProps} />
}

export default CustomizedButton
