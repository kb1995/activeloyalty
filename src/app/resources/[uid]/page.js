import Link from "next/link"
import * as prismic from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import { PrismicText, SliceZone } from "@prismicio/react"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { Layout } from "@/components/Layout"
import { Container } from "@/components/Container"
import { Heading } from "@/components/Heading"

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
})

function LatestArticle({ article }) {
  const date = prismic.asDate(article.data.published_date || article.first_publication_date)

  return (
    <li>
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <PrismicNextLink document={article}>{article.data.title}</PrismicNextLink>
      </h1>
      <p className="font-serif italic tracking-tighter text-slate-500">
        {dateFormatter.format(date)}
      </p>
    </li>
  )
}

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
      <article className="mt-28">
        <Container>
          <div className="mb-8">
            {/* TODO categories */}
            <p className="font-serif italic tracking-tighter text-slate-500">
              {dateFormatter.format(date)}
            </p>
          </div>
          <h1 className="text-2xl max-w-4xl">{article.data.title}</h1>
          <img
            className="rounded-[20px] h-[500px] object-cover w-full mt-20"
            src={article.data.image.url}
          />
        </Container>
        <Container>
          <div className="mt-28 flex items-start gap-32">
            <div className="flex-1">
              <SliceZone slices={article.data.slices} components={components} />
            </div>
            <div className="text-white bg-emerald p-8 w-[400px]">
              <h2>Receive news and updates</h2>
              <p>
                Subscribe to our newsletter to be the first in the know about industry news and
                events.{" "}
              </p>
            </div>
          </div>
        </Container>
      </article>
      {latestArticles.length > 0 && (
        <Container>
          <div className="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
            <div className="w-full">
              <Heading size="2xl" className="mb-10">
                Latest articles
              </Heading>
              <ul className="grid grid-cols-1 gap-12">
                {latestArticles.map((article) => (
                  <LatestArticle key={article.id} article={article} />
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
