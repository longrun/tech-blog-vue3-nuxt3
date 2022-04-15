# Tech blog starter-kit with vue3, nuxt3 and Contentful

- Vue3
- Nuxt3
- Vite
- Volar
- TypeScript
- Yarn 3
  - use .yarn/cache
- [Primeflex](https://www.primefaces.org/primeflex/)

# Init

- use Node.js v16.14.2^
- install VSCode extenstion `Volar`
- `yarn install`

# Setup env and configuration

Put `.env` file on project root.

```
CONTENTFUL_SPACE_ID=<your contentful space id>
CONTENTFUL_ACCESS_TOKEN=<your contentful access token>
```

Set site title on `nuxt.config.ts`.

```json
  publicRuntimeConfig: {
    SITE_TITLE: "YOUR BLOG SITE TITLE",
    ...
  },
```

# Start dev server

```
yarn dev
```

# build and start

```
yarn build
yarn start
```

# LICENSE

- MIT
- see [LICENSE](./LICENSE)
