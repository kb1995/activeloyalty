import Button from "@/components/Button"
import { asLink, asText } from "@prismicio/client"

const Circles = () => {
  return (
    <svg
      width="493"
      height="493"
      viewBox="0 0 493 493"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="-0.000335693"
        cy="0.000152588"
        r="323.667"
        stroke="#4D887D"
        stroke-opacity="0.5"
        stroke-width="10"
      />
      <circle
        cx="0.000335693"
        cy="-0.000152588"
        r="405.833"
        stroke="#4D887D"
        stroke-opacity="0.5"
        stroke-width="10"
      />
      <circle r="488" stroke="#4D887D" stroke-opacity="0.5" stroke-width="10" />
      <circle
        cx="0.000320435"
        cy="-0.000167847"
        r="159.333"
        stroke="#4D887D"
        stroke-opacity="0.5"
        stroke-width="10"
      />
      <circle r="241.5" stroke="#4D887D" stroke-opacity="0.5" stroke-width="10" />
    </svg>
  )
}

/**
 * @typedef {import("@prismicio/client").Content.CtaSectionSlice} CtaSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaSectionSlice>} CtaSectionProps
 * @param {CtaSectionProps}
 */
const CtaSection = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="bg-emerald relative overflow-hidden py-20 md:py-44">
        <div className="absolute left-0 top-0 z-10">
          <Circles />
        </div>
        <div className="z-20 relative text-white max-w-4xl ml-auto px-6 sm:px-7 lg:px-8">
          <span className="text-al-large">{slice.primary.eyebrow}</span>
          <h2 className="text-al-3xl mt-4">{asText(slice.primary.title)}</h2>
          <div className="mt-6 flex items-center gap-3">
            {slice.primary.buttons.map((button) => {
              return (
                <Button color="orange" href={asLink(button.link)}>
                  {button.text}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
