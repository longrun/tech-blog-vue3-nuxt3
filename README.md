# Tech blog starter-kit with vue3, nuxt3 and Contentful

- Vue3 - used [setup script](https://vuejs.org/api/sfc-script-setup.html)
- Nuxt3
- TypeScript
- Tools: Vite, Yarn 3, Volar
- Styles: [Primeflex](https://www.primefaces.org/primeflex/), [Primeicons](https://github.com/primefaces/primeicons), [markdownit](https://github.com/markdown-it/markdown-it)

# Init

- Use Node.js v16.14.2^
- Install `Volar` VSCode extenstion
- `yarn install`

# Set up Contentful

## Content model

<img width="814" alt="contentful-content-model" src="https://user-images.githubusercontent.com/15245958/164967460-7ae9d188-79e6-44e1-b8e0-6b63dd1d21d0.png">

## Tag example

<img width="1174" alt="contentful-tag" src="https://user-images.githubusercontent.com/15245958/164967463-b7838cff-00f9-4817-aa4a-dd3259e4076f.png">

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
      TEAM_STATEMENT: 'Creating a world where runners don\'t have to give up',
      GITHUB_ORGANIZATION_URL: 'https://github.com/longrun',
      GA_APP_NAME: 'LongRun Blog',
      GA_ID: process.env.GA_ID,
    },
  },
```

Change `favicion.ico` and `appletouch-icon.png` in the ~/public directory to yours.

# LICENSE

- [MIT LICENSE](./LICENSE)
