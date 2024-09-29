import Button from '@components/ui/Button'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface FallbackProps {
    onAction?: () => void
}

export default function Fallback(props: FallbackProps) {
    const { onAction } = props

    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }

    const handleAction = () => {
        if (onAction) {
            onAction()
        }
    }
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
        >
            <h2>Oops! Something went wrong.</h2>
            <Button onClick={handleAction}>Try Again</Button>
            <span>or</span>
            <Button onClick={handleGoHome}>Go Home</Button>
        </Box>
    )
}
