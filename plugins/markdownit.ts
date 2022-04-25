import { defineNuxtPlugin } from '#app'

import mdit from 'markdown-it'

import sub from 'markdown-it-sub'
import sup from 'markdown-it-sup'
import fn from 'markdown-it-footnote'
import emo from 'markdown-it-emoji'
import def from 'markdown-it-deflist'
import ins from 'markdown-it-ins'
import container from 'markdown-it-container'
import lazy from 'markdown-it-image-lazy-loading'

const markdownit = new mdit({
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
})
  .use(sub)
  .use(sup)
  .use(fn)
  .use(emo)
  .use(def)
  .use(ins)
  .use(container, 'codeblock', { marker: '@' })
  .use(lazy)

markdownit.linkify.set({ fuzzyEmail: false })

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('mdit', markdownit)
})
