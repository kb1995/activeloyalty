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
    <section
      className="bg-white relative z-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className="relative z-20 py-16 md:py-44">
        <h2 className="text-al-2xl text-center mx-auto max-w-4xl">{asText(slice.primary.title)}</h2>
        <div className="grid grid-cols-1 gap-20 mt-8 md:mt-[70px]">
          {slice.primary.cards.map((card, idx) => {
            return (
              <div
                style={{ top: (idx + 1) * 28 }}
                className={cn(
                  "grid sticky items-center md:grid-cols-2 p-[50px] rounded-2xl gap-8 md:gap-26",
                  {
                    "bg-latte text-black": card.theme === "Beige",
                    "bg-forest-pale text-black": card.theme === "Light Green",
                    "bg-forest-dark text-white": card.theme === "Green",
                    "bg-brown-sugar text-black": card.theme === "Orange",
                  }
                )}
              >
                <img className="order-2 md:order-1 rounded-2xl shadow-xl" src={card.image.url} />
                <div className="order-1 md:order-2">
                  <span className="text-al-eyebrow">{card.eyebrow}</span>
                  <h3 className="text-al-2xl mt-3 md:mt-4">{asText(card.title)}</h3>
                  <div className="mt-4 md:mt-9 text-al-medium md:max-w-[85%]">
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
