import { createClient } from "../prismicio"

export default async function sitemap() {
  const origin = "https://www.activeloyalty.io"

  const client = createClient()
  const pages = await client.dangerouslyGetAll()

  const items = pages.map((page) => {
    const path = page.url
    const url = origin + path

    if (page.uid === "home") {
      return {
        url: origin,
      }
    }

    if (path) {
      return {
        url: url,
      }
    } else {
      return null
    }
  })

  items.push({ url: origin + "/resources/" })

  return items.filter((item) => !!item)
}
