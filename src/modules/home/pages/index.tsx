import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/marketplace')
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="70vh"
            textAlign="center"
        >
            <h1>Welcome to TymeX interview assignment</h1>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNavigate}
            >
                Go to Marketplace
            </Button>
        </Box>
    )
}
