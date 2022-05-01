# Tech blog starter-kit with vue3, nuxt3 and Contentful

- Vue3 - using [setup script](https://vuejs.org/api/sfc-script-setup.html)
- Nuxt3
- TypeScript
- Tools: Vite, Yarn 3, Volar
- Styles: [Primeflex](https://www.primefaces.org/primeflex/), [Primeicons](https://github.com/primefaces/primeicons), [markdown-it](https://github.com/markdown-it/markdown-it)

# Init

- Install Node.js (recommend v16.14.2^)
- Install VSCode extenstion of `Volar`
- Do `yarn install`

# Set up Contentful

Its Content model setting example in this project.

<img width="814" alt="contentful-content-model" src="https://user-images.githubusercontent.com/15245958/164967460-7ae9d188-79e6-44e1-b8e0-6b63dd1d21d0.png">

Its Tag setting example in in this project.

<img width="1174" alt="contentful-tag" src="https://user-images.githubusercontent.com/15245958/164967463-b7838cff-00f9-4817-aa4a-dd3259e4076f.png">

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


Change `favicion.ico` and `appletouch-icon.png` in the ~/public directory to yours.


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
