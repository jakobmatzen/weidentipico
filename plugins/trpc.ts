import type { AppRouter } from '~/server/trpc/routers'
import superJSON from 'superjson'
import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'

export default defineNuxtPlugin(() => {
    const trpc = createTRPCNuxtClient<AppRouter>({
        links: [
            httpBatchLink({
                url: '/api/trpc',
                transformer: superJSON
            })
        ]
    })
    return {
        provide: {
            trpc
        }
    }
})
