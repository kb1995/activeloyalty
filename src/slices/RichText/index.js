import { PrismicRichText } from "@prismicio/react"

/**
 * @typedef {import("@prismicio/client").Content.RichTextSlice} RichTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextSlice>} RichTextProps
 * @param {RichTextProps}
 */
const RichText = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="prose">
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  )
}

export default RichText
