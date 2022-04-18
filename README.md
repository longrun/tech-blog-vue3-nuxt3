# Tech blog starter-kit with vue3, nuxt3 and Contentful

- Vue3
- Nuxt3
- Vite
- TypeScript
- Yarn 3
- Volar
- [Primeflex](https://www.primefaces.org/primeflex/)
- [Primeicons](https://github.com/primefaces/primeicons)

# Init

- Use Node.js v16.14.2^
- Install `Volar` VSCode extenstion
- `yarn install`

# Setup env and configuration

Put `.env` file on project root and include Contentful Identify and Token.

```
CONTENTFUL_CONTENT_KEY=<your contentful content id>
CONTENTFUL_SPACE_ID=<your contentful space id>
CONTENTFUL_ACCESS_TOKEN=<your contentful access token>
```

Write site title, team name, ... on `nuxt.config.ts`.

```
  runtimeConfig: {
    public: {
      BLOG_SITE_TITLE: "YOUR BLOG SITE TITLE",
      ...
    }
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

- [MIT LICENSE](./LICENSE)
