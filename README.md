# Tech blog starter-kit with vue3, nuxt3 and Contentful

- Vue3 - used [setup script](https://vuejs.org/api/sfc-script-setup.html)
- Nuxt3
- TypeScript
- Tools: Vite, Yarn 3, Volar
- Styles: [Primeflex](https://www.primefaces.org/primeflex/), [Primeicons](https://github.com/primefaces/primeicons)

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

# Change your site setting

Change site settings in the nuxt.config.ts to yours.

```
  runtimeConfig: {
    private: {
      ...
    },
    public: {
      DEFAUTL_LANGUAGE: 'ja',
      APP_NAME: 'tech-blog-vue3-nuxt3',
      APP_URL: 'https://github.com/longrun/tech-blog-vue3-nuxt3',
      BLOG_SITE_TITLE: 'LongRun Engineering',
      TEAM_NAME: 'LongRun Inc.',
      TEAM_WEBSITE_URL: 'https://longmayyou.run',
      TEAM_STATEMENT: 'ランナーが諦めなくていい世界をつくる',
      GITHUB_ORGANIZATION_URL: 'https://github.com/longrun',
      GA_APP_NAME: 'LongRun Blog',
      GA_ID: process.env.GA_ID,
    },
  },
```

Change `favicion.ico` and `appletouch-icon.png` in the ~/public directory to yours.

# LICENSE

- [MIT LICENSE](./LICENSE)
