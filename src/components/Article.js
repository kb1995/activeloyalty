import { PrismicNextLink } from "@prismicio/next"
import * as prismic from "@prismicio/client"

export function Article({ article }) {
  const date = prismic.asDate(article.data.published_date || article.first_publication_date)

  return (
    <PrismicNextLink document={article}>
      <article className="flex flex-col border border-gray-light overflow-hidden rounded-md items-start justify-between">
        <div className="relative w-full">
          <img alt="" src={article.data.image.url} className="aspect-[16/9] w-full object-cover" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="bg-white w-full p-[30px]">
          <div className="flex items-center gap-x-4 text-xs">
            {/* <time dateTime={date} className="text-gray-500">
              {date}
            </time> */}
            {/* <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              Category
            </div> */}
          </div>
          <div className="group relative">
            <h3 className="text-al-large">{article.data.title}</h3>
            <p className="mt-4 line-clamp-3 text-gray">{article.data.subtitle}</p>
            <p className="flex items-center gap-2 text-gray text-sm mt-10">
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
            </p>
          </div>
        </div>
      </article>
    </PrismicNextLink>
  )
}
