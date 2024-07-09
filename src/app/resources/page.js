import * as prismic from "@prismicio/client"

import { createClient } from "@/prismicio"
import { Layout } from "@/components/Layout"
import { Container } from "@/components/Container"
import { Article } from "@/components/Article"
import Badge from "@/components/Badge"
import Subscribe from "./Subscribe"

export async function generateMetadata() {
  const client = createClient()

  return {
    title: "Resources",
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
    <div className="bg-latte relative">
      <Orbit />
      <Layout settings={settings}>
        <Container className="mt-12 md:mt-20">
          <div className="relative">
            <div className="relative z-20">
              <h1 className="text-al-4xl  mb-8">Resources</h1>
              <p className="text-al-medium">
                Explore the latest insights and innovations in retail and loyalty.
              </p>
              <Subscribe
                className="mt-10 flex items-end gap-6 max-w-md"
                title="Subscribe for updates"
                color="green"
              />
            </div>
          </div>
          <div className="flex md:justify-end mt-8 relative z-20">
            <div>
              <h2 className="text-al-eyebrow-small text-gray mb-4">Explore topics</h2>
              <div className="flex items-center gap-2.5">
                {categories.map((item) => {
                  return (
                    <button className="bg-latte text-al-eyebrow-small hover:text-latte hover:bg-emerald duration-150 rounded-full px-4 py-2.5 text-sm uppercase text-emerald border border-emerald font-semibold">
                      {item.uid}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 mb-12 md:mb-40">
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </ul>
        </Container>
      </Layout>
    </div>
  )
}
