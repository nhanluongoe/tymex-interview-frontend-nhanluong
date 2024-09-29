import { renderHook } from '@testing-library/react-hooks'
import useBreakpoints from './useBreakpoints'
import { useMediaQuery } from '@mui/material'
import { describe, it, expect, vi, Mock } from 'vitest'

vi.mock('@mui/material', () => ({
    useMediaQuery: vi.fn(),
}))

describe('useBreakpoints', () => {
    it('should return isMobile as true when max-width is 600px', () => {
        ;(useMediaQuery as Mock).mockImplementation(
            (query) => query === '(max-width: 600px)'
        )

        const { result } = renderHook(() => useBreakpoints())

        expect(result.current.isMobile).toBe(true)
        expect(result.current.isTablet).toBe(false)
        expect(result.current.isDesktop).toBe(false)
    })

    it('should return isTablet as true when max-width is 960px', () => {
        ;(useMediaQuery as Mock).mockImplementation(
            (query) => query === '(max-width: 960px)'
        )

        const { result } = renderHook(() => useBreakpoints())

        expect(result.current.isMobile).toBe(false)
        expect(result.current.isTablet).toBe(true)
        expect(result.current.isDesktop).toBe(false)
    })

    it('should return isDesktop as true when min-width is 960px', () => {
        ;(useMediaQuery as Mock).mockImplementation(
            (query) => query === '(min-width: 960px)'
        )

        const { result } = renderHook(() => useBreakpoints())

        expect(result.current.isMobile).toBe(false)
        expect(result.current.isTablet).toBe(false)
        expect(result.current.isDesktop).toBe(true)
    })

    it('should return all false when no media query matches', () => {
        ;(useMediaQuery as Mock).mockImplementation(() => false)

        const { result } = renderHook(() => useBreakpoints())

        expect(result.current.isMobile).toBe(false)
        expect(result.current.isTablet).toBe(false)
        expect(result.current.isDesktop).toBe(false)
    })

    it('should return isMobile and isTablet as true when max-width is 960px and max-width is 600px', () => {
        ;(useMediaQuery as Mock).mockImplementation(
            (query) =>
                query === '(max-width: 600px)' || query === '(max-width: 960px)'
        )

        const { result } = renderHook(() => useBreakpoints())

        expect(result.current.isMobile).toBe(true)
        expect(result.current.isTablet).toBe(true)
        expect(result.current.isDesktop).toBe(false)
    })

    it('should return isTablet and isDesktop as true when min-width is 960px and max-width is 960px', () => {
        ;(useMediaQuery as Mock).mockImplementation(
            (query) =>
                query === '(min-width: 960px)' || query === '(max-width: 960px)'
        )

        const { result } = renderHook(() => useBreakpoints())

        expect(result.current.isMobile).toBe(false)
        expect(result.current.isTablet).toBe(true)
        expect(result.current.isDesktop).toBe(true)
    })
})
