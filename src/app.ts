import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie) // plugin do fastify para trabalhar com cookies

// plugin do fastify para trabalhar uma rota com um prefixo
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
