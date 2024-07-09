import { Container } from "@/components/Container"
import { asLink, asText } from "@prismicio/client"
import Button from "@/components/Button"
import Image from "next/image"

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
      <Image
        width="1266"
        height="1200"
        priority
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[-450px] z-10"
        src="/hero.png"
      />

      <Container className="text-center relative z-20 mt-12 md:mt-24 lg:mb-[300px]" size="lg">
        <h1 className="text-al-4xl">{asText(slice.primary.title)}</h1>
        <p className="text-al-large mt-4 md:mt-10 max-w-2xl mx-auto">
          {asText(slice.primary.subtitle)}
        </p>
        <div className="mt-4 md:mt-8 flex justify-center items-center gap-3">
          {slice.primary.buttons.map((button) => {
            return <Button href={asLink(button.link)}>{button.text}</Button>
          })}
        </div>
      </Container>
    </section>
  )
}

export default Hero
