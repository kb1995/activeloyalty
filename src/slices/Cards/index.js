import { Container } from "@/components/Container"
import { PrismicRichText } from "@prismicio/react"
import { asText } from "@prismicio/client"
import cn from "classnames"

/**
 * @typedef {import("@prismicio/client").Content.CardsSlice} CardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardsSlice>} CardsProps
 * @param {CardsProps}
 */
const Cards = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <Container className="my-20">
        <h2 className="text-3xl text-center">{asText(slice.primary.title)}</h2>
        <div className="grid grid-cols-1 gap-20 mt-14">
          {slice.primary.cards.map((card, idx) => {
            return (
              <div
                style={{ top: (idx + 1) * 36 }}
                className={cn(
                  "grid sticky items-center grid-cols-2 px-12 py-24 rounded-2xl gap-44",
                  {
                    "bg-latte text-black": card.theme === "Beige",
                    "bg-forest-pale text-black": card.theme === "Light Green",
                    "bg-forest-dark text-white": card.theme === "Green",
                    "bg-brown-sugar text-black": card.theme === "Orange",
                  }
                )}
              >
                <img className="rounded-2xl shadow-xl" src={card.image.url} />
                <div className="mr-12">
                  <span className="text-eyebrow">{card.eyebrow}</span>
                  <h3 className="text-2xl mt-5">{asText(card.title)}</h3>
                  <div className="mt-9 text-medium">
                    <PrismicRichText field={card.subtitle} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Cards
