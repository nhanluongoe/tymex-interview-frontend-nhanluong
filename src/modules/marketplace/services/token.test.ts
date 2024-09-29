import { describe, it, expect, vi, Mock } from 'vitest'
import http from '@libs/axios'
import { TokenService, TokenResponse, TokenParams } from './token'

vi.mock('@libs/axios')

describe('TokenService', () => {
    describe('getTokens', () => {
        it('should fetch tokens with default parameters', async () => {
            const mockResponse: TokenResponse = {
                data: [],
                limit: 10,
                start: 0,
            }
            ;(http.get as Mock).mockResolvedValue({ data: mockResponse })

            const response = await TokenService.getTokens({})

            expect(http.get).toHaveBeenCalledWith(
                '/token/?start=0&limit=10&range=0%2CInfinity&tier=&theme=&time=&price=&category=&query='
            )
            expect(response.data).toEqual(mockResponse)
        })

        it('should fetch tokens with provided parameters', async () => {
            const mockResponse: TokenResponse = {
                data: [],
                limit: 5,
                start: 10,
            }
            const params: Partial<TokenParams> = {
                start: 10,
                limit: 5,
                range: [0, 100],
                tier: 'gold',
                theme: 'dark',
                time: '2023-01-01',
                price: '100-200',
                category: 'art',
                query: 'test',
            }
            ;(http.get as Mock).mockResolvedValue({ data: mockResponse })

            const response = await TokenService.getTokens(params)

            expect(http.get).toHaveBeenCalledWith(
                '/token/?start=10&limit=5&range=0%2C100&tier=gold&theme=dark&time=2023-01-01&price=100-200&category=art&query=test'
            )
            expect(response.data).toEqual(mockResponse)
        })

        it('should handle errors', async () => {
            const errorMessage = 'Network Error'
            ;(http.get as Mock).mockRejectedValue(new Error(errorMessage))

            await expect(TokenService.getTokens({})).rejects.toThrow(
                errorMessage
            )
        })
    })
})
