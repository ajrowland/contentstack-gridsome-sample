const contentstack = require("contentstack")

const stack = contentstack.Stack(
  process.env.CONTENTSTACK_API_KEY,
  process.env.CONTENTSTACK_DELIVERY_TOKEN,
  process.env.CONTENTSTACK_ENVIRONMENT
)

const PAGE_SIZE = 100

const generateKey = () => {
  return Math.random().toString(36).substring(10)
}

const getEntries = async (
  contentType,
  skip = 0,
  limit = PAGE_SIZE,
  language,
  reference
) => {
  if (reference) {
    return stack
      .ContentType(contentType)
      .Query()
      .skip(skip)
      .limit(limit)
      .includeCount()
      .includeReference([reference])
      .language(language)
      .toJSON()
      .find()
  }

  return stack
    .ContentType(contentType)
    .Query()
    .skip(skip)
    .limit(limit)
    .includeCount()
    .language(language)
    .toJSON()
    .find()
}

const getGeneralPages = async () => {
  let generalPages = []
  let totalItems = 0
  let skip = 0

  do {
    const response = await getEntries(
      "general",
      skip,
      PAGE_SIZE,
      process.env.LANGUAGE,
      "content_blocks.link_list.links"
    )

    totalItems = response[1]

    console.log(
      `Importing ${skip} to ${(skip += PAGE_SIZE)} of ${totalItems} general pages from Contentstack.`
    )

    response[0].forEach((item) => {
      generalPages.push(item)
    })
  } while (generalPages.length < totalItems)

  return generalPages
}

module.exports.getGeneralPages = getGeneralPages()
