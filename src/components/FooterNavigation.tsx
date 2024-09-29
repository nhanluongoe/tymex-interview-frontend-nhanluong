import { Box, Grid2 } from '@mui/material'
import { Link } from 'react-router-dom'

interface Navigation {
    name: string
    label: string
    href: string
}

const NAVIGATION: Navigation[] = [
    {
        name: 'home',
        label: 'Home',
        href: '#',
    },
    {
        name: 'white paper',
        label: 'White paper',
        href: '#',
    },
    {
        name: 'faqs',
        label: 'FAQs',
        href: '#',
    },
    {
        name: 'about us',
        label: 'About us',
        href: '#',
    },
    {
        name: 'marketplace',
        label: 'Marketplace',
        href: '#',
    },
    {
        name: 'news',
        label: 'News',
        href: '#',
    },
    {
        name: 'our teams',
        label: 'Our teams',
        href: '#',
    },
    {
        name: 'roadmap',
        label: 'Roadmap',
        href: '#',
    },
    {
        name: 'community',
        label: 'Community',
        href: '#',
    },
]

export default function FooterNavigation() {
    return (
        <Box>
            <Grid2 container spacing={1.5}>
                {NAVIGATION.map((nav) => (
                    <Grid2
                        size={4}
                        key={nav.name}
                        sx={{
                            color: 'white',
                        }}
                    >
                        <Link to={nav.href}>{nav.label}</Link>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    )
}
