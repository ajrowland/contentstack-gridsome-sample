const data = require(`../../contentstack/datasync-boilerplate/_development_contents/${process.env.LANGUAGE}/data/pressRelease.json`)

const generateKey = () => {
  return Math.random().toString(36).substring(10)
}

const getPressReleases = async () => {
  let pressReleases = []

  data.forEach((item) => {
    const pressRelease = {
      id: item.uid,
      title: item.title,
      slug: {
        current: item.url,
      },
      date: item.date,
      summary: item.summary,
      paragraphs: item.paragraphs
        ? item.paragraphs.map((paragraph) => {
            return {
              key: generateKey(),
              title: paragraph.title,
              body: paragraph.body,
              images: paragraph.images
                ? paragraph.images.map((image) => {
                    return {
                      key: image.uid,
                      url: image.url,
                      alt: image.description,
                    }
                  })
                : [],
            }
          })
        : [],
      blocks: item.blocks,
    }

    pressReleases.push(pressRelease)
  })

  return pressReleases
}

module.exports.getPressReleases = getPressReleases()
