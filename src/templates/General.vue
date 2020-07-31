<template>
  <Layout>
    <h1>{{$page.general.title}}</h1>
    <time class="date" datetime="$page.pressRelease.date" v-html="$page.general.date" />
    <div class="intro" v-html="$page.general.introduction" />
    <Section />
    <component
      :is="block.blockName"
      v-for="(block, i) in contentBlocks"
      :key="i"
      v-bind="{...block}"
    />
  </Layout>
</template>

<script>
import Accordion from "~/components/Accordion"
import Banner from "~/components/Banner"
import Contactdetails from "~/components/ContactDetails"
import Contentsection from "~/components/ContentSection"
import Quote from "~/components/Quote"
import Linklist from "~/components/LinkList"

export default {
  components: {
    Accordion,
    Banner,
    Contactdetails,
    Contentsection,
    Quote,
    Linklist,
  },
  computed: {
    contentBlocks() {
      return this.$page.general.content_blocks.map((blocks) => {
        for (const blockName in blocks) {
          if (blocks[blockName] !== null) {
            const block = {
              blockName: blockName.replace(/_/g, ""),
              ...blocks[blockName],
            }
            return block
          }
        }
      }).filter(block => {
        return block !== undefined
      })
    },
  },
  metaInfo() {
    return {
      title: this.$page.general.title,
      meta: [
        {
          name: "description",
          content: this.$page.general.introduction,
        },
      ],
    }
  },
}
</script>

<page-query>
query ($id: ID!) {
  general(id: $id) {
    title
    date(format: "DD/MM/YYYY")
    introduction
    content_blocks {
      content_section {
        __typename
        heading
        content
        images {
          url
          description
        }
      }
      quote {
        __typename
        attribution
        role
        text
      }
      banner {
        __typename
        title
        summary
        image {
          url
          description
        }
      }
      accordion {
        __typename
        title
        group {
          heading
          content
        }
      }
      contact_details {
        __typename
        name
        address
        email
      }
      link_list {
        __typename
        heading
        links {
          title
          uid
          url
          year: date(format: "YYYY")
        }
      }
    }
  }
}
</page-query>