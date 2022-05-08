# Tech blog starter-kit with vue3, nuxt3 and Contentful

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6e1d7a1-6034-4312-9255-452c9e725b7e/deploy-status)](https://app.netlify.com/sites/delicate-custard-cc73d3/deploys)

- Vue3 - using [setup script](https://vuejs.org/api/sfc-script-setup.html)
- Nuxt3 - v3.0.0-rc.2
- TypeScript
- Tools: Vite, Yarn 3, Volar
- Styles: [Primeflex](https://www.primefaces.org/primeflex/), [Primeicons](https://github.com/primefaces/primeicons), [markdown-it](https://github.com/markdown-it/markdown-it)

## Features

- Simple and clean content
- Article is can wrote Markdown 
- Responsive layout for PC, Tablet, Smartphone
- Lighthouse Hi-score
- Perfect OGP resources setup
- Support i18n
- Support Google Analytics 4
- of course, No Ad!

Top Page | Article Page
-- | --
<img width="1345" alt="スクリーンショット 2022-05-02 10 23 02" src="https://user-images.githubusercontent.com/15245958/166173789-cca850d3-80f7-4586-b887-bf85e599c114.png"> | <img width="1354" alt="スクリーンショット 2022-05-02 10 22 43" src="https://user-images.githubusercontent.com/15245958/166173807-295251e7-ac2c-490f-8f53-96af00d348b5.png">
<img width="759" alt="スクリーンショット 2022-05-02 10 16 52" src="https://user-images.githubusercontent.com/15245958/166173629-f6bf71b4-2e6b-4f5c-91b8-6eac17ed7f8b.png"> | <img width="773" alt="スクリーンショット 2022-05-02 10 18 13" src="https://user-images.githubusercontent.com/15245958/166173633-80dc1607-038d-45be-a50b-f2c3c5a9cb43.png">


# Init

- Install Node.js (recommend v16.14.2^)
- Install VSCode extenstion of `Volar`
- Do `yarn install`

# Set up Contentful

Content model setting example in this project.

<img width="814" alt="contentful-content-model" src="https://user-images.githubusercontent.com/15245958/164967460-7ae9d188-79e6-44e1-b8e0-6b63dd1d21d0.png">

Tag setting example in in this project. Navigation sort order can controlled by `:order=NUM`.

<img width="1388" alt="contentful-tag" src="https://user-images.githubusercontent.com/15245958/167295104-ef86cd2b-620f-414b-a9be-c349f7315a8c.png">

# Setup env and configuration

Make sure to rename file `.env.template` to `.env` and write Contentful Identify and Token.

```
CONTENTFUL_CONTENT_KEY=<your contentful content id>
CONTENTFUL_SPACE_ID=<your contentful space id>
CONTENTFUL_ACCESS_TOKEN=<your contentful access token>
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
      TEAM_LOGO_IMAGE_ON_FOOTER: '/images/logo-white-bg_transparent-465x195.png',
      GITHUB_ORGANIZATION_URL: 'https://github.com/longrun',
      GA_APP_NAME: 'LongRun Blog',
      GA_ID: process.env.GA_ID,
      GA_APP_NAME: 'LongRun Blog',
    },
  },
```

# Start dev server

```
yarn dev
```

Conguraturation 🎉


Don't forget change `favicion.ico` and `appletouch-icon.png` in the ~/public directory to yours.


# Build for SSG

Check config is equals to `ssr:true` and `target:static` in `nuxt.config.ts`.

```
export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  ...
```

Generate of files.

```
yarn generate
```

And you can find more deployment information from https://nuxtjs.org/deployments/


# Package upgrade

```
yarn upgrade-interactive
```

# LICENSE

- [MIT LICENSE](./LICENSE)
