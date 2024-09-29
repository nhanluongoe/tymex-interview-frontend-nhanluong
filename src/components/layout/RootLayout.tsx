import Footer from '@components/Footer'
import Header from '@components/Header'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
            }}
        >
            <Header />
            <Box
                component="main"
                sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}
            >
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}
