/**
 * @typedef {import("@prismicio/client").Content.CtaSectionSlice} CtaSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaSectionSlice>} CtaSectionProps
 * @param {CtaSectionProps}
 */
const CtaSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cta_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CtaSection;
