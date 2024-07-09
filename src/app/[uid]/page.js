import { SliceZone } from "@prismicio/react"
import { notFound } from "next/navigation"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { Layout } from "@/components/Layout"

export async function generateMetadata({ params }) {
  const client = createClient()
  const page = await client.getByUID("page", params.uid).catch(() => notFound())

  return {
    title: `${page.data.seo_title} | Active Loyalty`,
    description: page.data.seo_description,
    openGraph: {
      title: page.data.seo_social_title,
      description: page.data.seo_social_description,
      images: [
        {
          url: page.data.seo_image.url,
        },
      ],
    },
  }
}

export default async function Page({ params }) {
  const client = createClient()

  const page = await client.getByUID("page", params.uid).catch(() => notFound())
  const settings = await client.getSingle("settings")

  return (
    <Layout settings={settings}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}

export async function generateStaticParams() {
  const client = createClient()

  const pages = await client.getAllByType("page")

  return pages.map((page) => {
    return { uid: page.uid }
  })
}
