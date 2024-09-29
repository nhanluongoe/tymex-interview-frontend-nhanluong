// mocks/handlers.js
import { http, HttpResponse } from 'msw'
import { TOKENS } from './data'

export const handlers = [
    http.get('/token', ({ request }) => {
        const url = new URL(request.url)
        const limit = Number(url.searchParams.get('limit'))
        const start = Number(url.searchParams.get('start'))
        const range = url.searchParams.get('range')
        const tier = url.searchParams.get('tier')
        const theme = url.searchParams.get('theme')
        const price = url.searchParams.get('price')
        const time = url.searchParams.get('time')
        const category = url.searchParams.get('category')
        const query = url.searchParams.get('query')

        let tokens = TOKENS

        if (category && category !== 'all') {
            tokens = tokens.filter((token) => token.category === category)
        }

        if (range) {
            const [min, max] = range.split(',')
            tokens = tokens.filter(
                (token) =>
                    token.price >= Number(min) && token.price <= Number(max)
            )
        }

        if (tier && tier !== 'all') {
            tokens = tokens.filter((token) => token.tier === tier)
        }

        if (theme && theme !== 'all') {
            tokens = tokens.filter((token) => token.theme === theme)
        }

        if (time) {
            tokens = tokens.sort((a, b) =>
                time === 'asc'
                    ? a.createdAt.localeCompare(b.createdAt)
                    : b.createdAt.localeCompare(a.createdAt)
            )
        }

        if (price) {
            tokens = tokens.sort((a, b) =>
                price === 'asc' ? a.price - b.price : b.price - a.price
            )
        }

        if (query) {
            tokens = tokens.filter((token) =>
                token.name.toLowerCase().includes(query.toLowerCase())
            )
        }

        if (start) {
            tokens = tokens.slice(start, start + limit)
        } else {
            tokens = tokens.slice(0, limit)
        }

        const remain = tokens.length >= limit && start + limit < TOKENS.length

        const response = {
            limit,
            start,
            data: tokens,
            remain,
        }

        console.log(response)

        return HttpResponse.json(response)
    }),
]
