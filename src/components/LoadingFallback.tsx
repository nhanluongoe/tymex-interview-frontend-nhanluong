import { CircularProgress, Box, Typography } from '@mui/material'

export default function LoadingFallback() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <CircularProgress />
            <Typography variant="h6" style={{ marginTop: 16 }}>
                Loading, please wait...
            </Typography>
        </Box>
    )
}
