import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60, // 60 seconds
            refetchInterval: 1000 * 60, // 60 seconds
        },
    },
})

export default queryClient
