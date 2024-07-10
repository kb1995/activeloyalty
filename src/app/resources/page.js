import { createClient } from "@/prismicio"
import { Layout } from "@/components/Layout"
import { Container } from "@/components/Container"
import Subscribe from "./Subscribe"
import ContentGrid from "./ContentGrid"

export async function generateMetadata() {
  return {
    title: "Resources | Active Loyalty",
  }
}

const Orbit = () => {
  return (
    <svg
      className="absolute z-10 right-16 top-0"
      width="717"
      height="585"
      viewBox="0 0 717 585"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="358.498" cy="226.5" r="237.5" stroke="#DBE0D5" stroke-width="3" />
      <circle cx="358.5" cy="226.5" r="297.25" stroke="#DBE0D5" stroke-width="3" />
      <circle cx="358.499" cy="226.5" r="357" stroke="#DBE0D5" stroke-width="3" />
      <circle cx="358.499" cy="226.5" r="177.75" stroke="#DBE0D5" stroke-width="3" />
      <circle cx="103.964" cy="70.5528" r="8.4625" fill="#DBE0D5" stroke="#DBE0D5" />
      <circle cx="648.289" cy="287.446" r="8.4625" fill="#DBE0D5" stroke="#DBE0D5" />
      <circle cx="543.725" cy="373.486" r="8.4625" fill="#DBE0D5" stroke="#DBE0D5" />
      <circle cx="273.654" cy="69.9553" r="8.4625" fill="#DBE0D5" stroke="#DBE0D5" />
      <circle cx="68.7125" cy="287.446" r="8.4625" fill="#DBE0D5" stroke="#DBE0D5" />
      <circle cx="528.787" cy="58.6028" r="8.4625" fill="#DBE0D5" stroke="#DBE0D5" />
    </svg>
  )
}
export default async function Index() {
  const client = createClient()

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.published_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  })

  const categories = await client.getAllByType("article_category", {})
  const settings = await client.getSingle("settings")

  return (
    <div className="bg-latte-pale relative">
      <Orbit />
      <Layout settings={settings}>
        <Container className="mt-12 md:mt-24">
          <div className="relative">
            <div className="relative z-20">
              <h1 className="text-al-4xl mb-6">Resources</h1>
              <p className="text-al-medium">
                Explore the latest insights and innovations in retail and loyalty.
              </p>
              <Subscribe
                className="mt-10 flex items-end gap-6 max-w-xl"
                title="Subscribe for updates"
                color="green"
              />
            </div>
          </div>
          <ContentGrid categories={categories} articles={articles} />
        </Container>
      </Layout>
    </div>
  )
}
