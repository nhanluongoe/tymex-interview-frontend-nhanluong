import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest'
import Tabs, { Tab } from './Tabs'
import { useToken } from '@modules/marketplace/contexts/TokenContext'

vi.mock('@modules/marketplace/contexts/TokenContext')

describe('Tabs component', () => {
    const mockHandleFiltersChange = vi.fn()

    beforeEach(() => {
        ;(useToken as Mock).mockReturnValue({
            handleFiltersChange: mockHandleFiltersChange,
        })
    })

    it('renders all tabs', () => {
        render(<Tabs />)
        const tabLabels = [
            'All',
            'Upper Body',
            'Lower Body',
            'Hat',
            'Shoes',
            'Accessories',
            'Legendary',
            'Mythic',
            'Epic',
            'Rare',
            'Cool',
            'Superb',
            'Fantastic',
        ]

        tabLabels.forEach((label) => {
            expect(screen.getByText(label)).toBeInTheDocument()
        })
    })

    it('calls handleFiltersChange with correct value on tab change', () => {
        render(<Tabs />)
        const tab = screen.getByText('Upper Body')

        fireEvent.click(tab)

        expect(mockHandleFiltersChange).toHaveBeenCalledWith({
            category: 'upper-body',
        })
    })

    it('changes selected tab on click', () => {
        render(<Tabs />)
        const tab = screen.getByText('Upper Body')

        fireEvent.click(tab)

        expect(tab).toHaveClass('Mui-selected')
    })

    it('renders custom tabs if provided', () => {
        const customTabs: Tab[] = [
            { label: 'Custom 1', value: 'custom-1' },
            { label: 'Custom 2', value: 'custom-2' },
        ]
        render(<Tabs tabs={customTabs} />)

        customTabs.forEach((tab) => {
            expect(screen.getByText(tab.label)).toBeInTheDocument()
        })
    })
})
