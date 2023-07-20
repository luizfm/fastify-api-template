# Fastify Api Template (Working in progress)

A simple SOLID Fastify (Node.js framework) template for creating an API, using Prisma ORM and PostgreSQL.

## How to run this project:

1 - Start running the command `npm install` to install `node_modules` dependencies <br />
2 - Then, run `docker compose up -d` to create a virtual container of `postgreSQL` database in your machine <br />
3 - After that, run the command `npx prisma migrate dev` to running the migrations that will create the initial users table <br /> 
4 - Finally, execute the server with the command of `npm run dev`. We're using `tsx` for development combined with its hot-reload. <br />

## Additional scripts:

1 - `npm run lint:fix` - This will lint the whole application following the default standards from `@rocketseat/config-eslint/node` <br />
2 - `npm run build` - Here we are using `tsup` to build our application. Its usage it easy and is powered by esbuild (Faster than webpack, rollup). <br />

## Things to add

- [ ] Monitoring applications
- [ ] Unit tests
- [ ] E2E tests
