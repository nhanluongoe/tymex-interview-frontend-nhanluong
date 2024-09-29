import { Box, Typography } from '@mui/material'
import VerifiedIcon from './icons/VerifiedIcon'

interface AuthorAvatarProps {
    avatar: string
    name: string
    isVerified: boolean
}

export default function Author(props: AuthorAvatarProps) {
    const { avatar, name, isVerified } = props

    return (
        <Box
            sx={{
                mt: 3,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                <Box
                    component="img"
                    alt="author-avatar"
                    src={avatar}
                    sx={{
                        with: 32,
                        height: 32,
                        mr: 1,
                    }}
                ></Box>
                {isVerified && (
                    <VerifiedIcon
                        data-testid="author-verified-icon"
                        width={12}
                        height={12}
                        sx={{
                            position: 'absolute',
                            right: -6,
                            bottom: -6,
                        }}
                    />
                )}
            </Box>
            <Typography>{name}</Typography>
        </Box>
    )
}
