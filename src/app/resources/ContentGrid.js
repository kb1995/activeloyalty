"use client"

import { useState, useEffect } from "react"
import CategoryFilters from "./CategoryFilters"
import { Article } from "@/components/Article"

const ContentGrid = ({ categories, articles }) => {
  const [active, setActive] = useState("all")
  const [cards, setCards] = useState(articles)

  useEffect(() => {
    if (active === "all") {
      setCards(articles)
    } else {
      const filteredBlogs = articles.filter((post) =>
        post.data.categories.some((item) => active === item.category.uid)
      )

      setCards(filteredBlogs)
    }
  }, [active])

  return (
    <>
      <div className="flex md:justify-end mt-8 relative z-20">
        <CategoryFilters active={active} setActive={setActive} categories={categories} />
      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 mb-12 md:mb-40">
        {cards.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ul>
    </>
  )
}

export default ContentGrid
