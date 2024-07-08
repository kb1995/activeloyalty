import { Container } from "@/components/Container"
import { asLink, asText } from "@prismicio/client"
import Button from "@/components/Button"

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section
      className="relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className="text-center mt-24" size="lg">
        <h1 className="text-4xl mb-10">{asText(slice.primary.title)}</h1>
        <p className="text-large max-w-2xl mx-auto">{asText(slice.primary.subtitle)}</p>
        <div className="mt-8 flex justify-center items-center gap-3">
          {slice.primary.buttons.map((button) => {
            return <Button href={asLink(button.link)}>{button.text}</Button>
          })}
        </div>
      </Container>
    </section>
  )
}

export default Hero
