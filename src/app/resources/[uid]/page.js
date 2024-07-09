import Link from "next/link"
import * as prismic from "@prismicio/client"
import { SliceZone } from "@prismicio/react"
import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { Layout } from "@/components/Layout"
import { Container } from "@/components/Container"
import { Heading } from "@/components/Heading"
import Subscribe from "./Subscribe"
import Badge from "@/components/Badge"
import { Article } from "@/components/Article"

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
})

export async function generateMetadata({ params }) {
  const client = createClient()
  const settings = await client.getSingle("settings")
  const article = await client.getByUID("article", params.uid).catch(() => notFound())

  return {
    title: `${article.data.title} | Active Loyalty`,
    description: article.data.seo_description,
    openGraph: {
      title: article.data.seo_social_title,
      description: article.data.seo_social_description,
      images: [
        {
          url: article.data.seo_image.url,
        },
      ],
    },
  }
}

export default async function Page({ params }) {
  const client = createClient()

  const article = await client.getByUID("article", params.uid).catch(() => notFound())

  const latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.published_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  })

  const settings = await client.getSingle("settings")

  const date = prismic.asDate(article.data.published_date || article.first_publication_date)

  return (
    <Layout withHeaderDivider={false} withProfile={false} settings={settings}>
      <article className="mt-12 md:mt-28">
        <Container>
          <div className="mb-8 flex items-center gap-2.5">
            <div className="flex items-center gap-2.5">
              {article.data.categories.map((item) => {
                return <Badge>{item.category.uid}</Badge>
              })}
            </div>
            <p className="text-sm font-medium text-gray">{dateFormatter.format(date)}</p>
          </div>
          <h1 className="text-al-2xl max-w-4xl">{article.data.title}</h1>
          <img
            className="rounded-[20px] md:h-[500px] object-cover w-full mt-8 md:mt-20"
            src={article.data.image.url}
          />
        </Container>
        <Container>
          <div className="mt-12 md:mt-28 flex flex-col md:flex-row items-start gap-8 md:gap-32">
            <div className="flex-1">
              <SliceZone slices={article.data.slices} components={components} />
            </div>
            <div className="text-white bg-emerald px-6 py-14 w-full md:w-[400px] rounded-[5px] sticky top-4">
              <h2 className="text-al-xl">Receive news and updates</h2>
              <p className="text-al-medium mt-6">
                Subscribe to our newsletter to be the first in the know about industry news and
                events.{" "}
              </p>
              <Subscribe />
            </div>
          </div>
        </Container>
      </article>
      {latestArticles.length > 0 && (
        <Container className="mt-12 md:mt-40 mb-20">
          <div className="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
            <div className="w-full">
              <div className="flex mb-14 justify-between items-center">
                <h2 className="text-al-2xl">Related resources</h2>
                <Link
                  href="/resources/"
                  className="flex items-center gap-2 text-gray text-al-medium font-semibold"
                >
                  <span>Read more</span>{" "}
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.000270844 4.61538L9.42335 4.61538L5.38489 0.576923L5.89258 0L10.8926 5L5.89258 10L5.38489 9.42308L9.42335 5.38462L0.000270844 5.38462V4.61538Z"
                      fill="#4D887D"
                    />
                  </svg>
                </Link>
              </div>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {latestArticles.map((article) => (
                  <Article article={article} />
                ))}
              </ul>
            </div>
          </div>
        </Container>
      )}
    </Layout>
  )
}

export async function generateStaticParams() {
  const client = createClient()

  const articles = await client.getAllByType("article")

  return articles.map((article) => {
    return { uid: article.uid }
  })
}
