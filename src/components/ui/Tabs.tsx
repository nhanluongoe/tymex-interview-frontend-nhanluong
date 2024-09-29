import { useToken } from '@modules/marketplace/contexts/TokenContext'
import { Tabs as MuiTabs, Tab, styled } from '@mui/material'
import { useState } from 'react'

const TABS: Tab[] = [
    { label: 'All', value: 'all' },
    { label: 'Upper Body', value: 'upper-body' },
    { label: 'Lower Body', value: 'lower-body' },
    { label: 'Hat', value: 'hat' },
    { label: 'Shoes', value: 'shoes' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Legendary', value: 'legendary' },
    { label: 'Mythic', value: 'mythic' },
    { label: 'Epic', value: 'epic' },
    { label: 'Rare', value: 'rare' },
    { label: 'Cool', value: 'cool' },
    { label: 'Superb', value: 'superb' },
    { label: 'Fantastic', value: 'fantastic' },
]

const StyledTabs = styled(MuiTabs)(({ theme }) => ({
    backgroundColor: 'transparent',
    width: '100%',
    '& .MuiTabs-indicator': {
        display: 'none',
    },
    '& .MuiTab-root': {
        fontWeight: 'bold',
        textTransform: 'none',
        color: theme.palette.primary.contrastText,
        '&.Mui-selected': {
            color: 'white',
            backgroundColor: theme.palette.primary.main,
        },
    },
}))

const StyledTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    color: theme.palette.primary.contrastText,
    backgroundColor: '#5b1e62',
    margin: `0 ${theme.spacing(1)}`,
    borderRadius: theme.spacing(0.5),
}))

export interface Tab {
    label: string
    value: string
}

interface TabsProps {
    tabs?: Tab[]
}

export default function Tabs(props: TabsProps) {
    const { tabs = TABS } = props

    const [value, setValue] = useState(0)

    const { handleFiltersChange } = useToken()

    return (
        <StyledTabs
            value={value}
            onChange={(_, newValue) => {
                handleFiltersChange({ category: tabs[newValue].value })
                setValue(newValue)
            }}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
        >
            {tabs.map((tab, index) => (
                <StyledTab key={index} label={tab.label} />
            ))}
        </StyledTabs>
    )
}
