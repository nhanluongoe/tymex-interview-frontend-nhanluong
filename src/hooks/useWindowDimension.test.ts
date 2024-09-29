import { renderHook, act } from '@testing-library/react-hooks'
import useWindowDimensions from './useWindowDimension'
import { describe, expect, it } from 'vitest'

describe('useWindowDimensions', () => {
    it('should return initial window dimensions', () => {
        const { result } = renderHook(() => useWindowDimensions())
        expect(result.current).toEqual({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    })

    it('should update dimensions on window resize', () => {
        const { result } = renderHook(() => useWindowDimensions())

        act(() => {
            window.innerWidth = 500
            window.innerHeight = 500
            window.dispatchEvent(new Event('resize'))
        })

        expect(result.current).toEqual({ width: 500, height: 500 })

        act(() => {
            window.innerWidth = 800
            window.innerHeight = 600
            window.dispatchEvent(new Event('resize'))
        })

        expect(result.current).toEqual({ width: 800, height: 600 })
    })
})
