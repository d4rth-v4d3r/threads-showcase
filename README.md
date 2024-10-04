# Getting started

1. Clone this repo
2. Run `npm i`

# Vercel Showcase

- [Frontend](https://threads-showcase.vercel.app/)
- [Backend](https://threads-server-umber.vercel.app/api/article/1ee0920a-5b5e-4605-a8bd-27de171e3cef)

# Running checks

```sh
npm run nx  run-many -- --all  -t lint test build
```

# Unit tests can be seen at:

- [Frontend](./apps/threads-showcase/src/components/sidebar/sidebar-tree.spec.tsx)
- [Backend](./apps/threads-api/src/main.spec.ts)

# Running the project

```sh
npm run nx affected -- -t build
docker-compose build
docker-compose up
```

# Application endpoints

- Web app: http://localhost:3000/
- API: http://localhost:3333/api/article/1ee0920a-5b5e-4605-a8bd-27de171e3cef
