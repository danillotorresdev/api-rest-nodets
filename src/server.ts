import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })

// O SQlite é um banco sql, ou seja, é um banco de dados relacional,
// que utiliza a linguagem SQL para fazer as consultas e manipulações de dados.

// Query builders: São ferramentas que permitem escrever as queries
// utilizando javascript, ou seja, não é necessário escrever SQL puro. Alguns exemplos são: Knex.js, TypeORM, Prisma, Sequelize.

// Migrations sao arquivos que contem instruções para criação, alteração ou remoção
// de tabelas e colunas no banco de dados. Com as migrations é possível versionar o banco de dados,
// ou seja, é possível saber quais alterações foram feitas e quando foram feitas.
