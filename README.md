# Getting started

1. Clone this repo
2. Run `npm i`
3. Clone the `.env.example` file into a `.env` file.

# Local deployment

```sh
npm run nx run threads-showcase:dev
```

## Application endpoints

- Web app: http://localhost:3000/
- API: http://localhost:3333/api/article/1ee0920a-5b5e-4605-a8bd-27de171e3cef

# Production deployment

Any time a commit is push to production, the artifacts will be deployed to.

- [Frontend](https://threads-showcase.vercel.app/)
- [Backend](https://threads-api-beta.vercel.app/api/article/1ee0920a-5b5e-4605-a8bd-27de171e3cef)

# Running checks

```sh
npm run nx  run-many -- --all  -t lint test build
```

# Unit tests can be seen at:

- [Frontend](./apps/threads-showcase/src/components/sidebar/sidebar-tree.spec.tsx)
- [Backend](./apps/threads-api/src/api/index.spec.ts)
