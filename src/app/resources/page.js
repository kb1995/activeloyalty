import * as prismic from "@prismicio/client"

import { createClient } from "@/prismicio"
import { Layout } from "@/components/Layout"
import { Container } from "@/components/Container"
import { Article } from "@/components/Article"

export async function generateMetadata() {
  const client = createClient()

  return {
    title: "Resources",
  }
}

export default async function Index() {
  const client = createClient()

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.published_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  })
  const settings = await client.getSingle("settings")

  return (
    <Layout withHeaderDivider={false} settings={settings}>
      <Container size="widest">
        <ul className="grid grid-cols-1 gap-16">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Container>
    </Layout>
  )
}
