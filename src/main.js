// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue"
import ContentImage from "~/components/ContentImage.vue"

const urlForImage = (source, data) => {
  return ""
}

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  Vue.component("ContentImage", ContentImage)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage

  Vue.mixin({
    methods: {},
  })
}
