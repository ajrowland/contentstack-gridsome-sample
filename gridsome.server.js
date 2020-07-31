// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const contentConnector = require("./contentstack.connector")

const createGeneralPages = async (createPage, graphql) => {
  console.log("Creating general pages")

  const result = await graphql(`
    {
      generalPages: allGeneral {
        edges {
          node {
            id
            url
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const routeEdges = (result.data.generalPages || {}).edges || []

  routeEdges.forEach((edge) => {
    const { id, url = {} } = edge.node

    console.log(`Creating general page: ${url}`)

    createPage({
      path: url,
      component: require.resolve("./src/templates/General.vue"),
      context: {
        id,
      },
    })
  })
}

module.exports = function (api) {
  api.loadSource(async (store) => {
    const general = store.addCollection({
      typeName: "general",
    })

    const contentPages = await contentConnector.getGeneralPages

    contentPages.forEach((page) => general.addNode(page))
  })

  api.createPages(({ createPage, graphql }) => {
    createGeneralPages(createPage, graphql)
  })
}
