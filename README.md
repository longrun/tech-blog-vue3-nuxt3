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

- Use Node.js v16.14.2^
- Install `Volar` VSCode extenstion
- `yarn install`

# Setup env and configuration

Put `.env` file on project root and include Contentful Identify and Token.

```
CONTENTFUL_SPACE_ID=<your contentful space id>
CONTENTFUL_ACCESS_TOKEN=<your contentful access token>
```

Write site title on `nuxt.config.ts`.

```
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
