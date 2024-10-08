import queryClient from '@libs/react-query.ts'
import { ThemeProvider } from '@mui/material'
import router from '@routes/index.tsx'
import theme from '@styles/theme.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/index.css'

async function enableMocking() {
    const { worker } = await import('./mocks/browser.ts')
    return worker.start()
}

enableMocking().then(() =>
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </QueryClientProvider>
        </StrictMode>
    )
)
