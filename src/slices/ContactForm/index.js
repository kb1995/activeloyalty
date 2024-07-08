import Button from "@/components/Button"
import { Container } from "@/components/Container"
import { PrismicRichText } from "@prismicio/react"

const Orbit = () => {
  return (
    <svg
      className="absolute z-10 left-1/2 -translate-x-1/2"
      width="1200"
      height="596"
      viewBox="0 0 1200 596"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="600" cy="-4" r="398.5" stroke="#D9D9D9" stroke-opacity="0.2" stroke-width="3" />
      <circle cx="600" cy="-4" r="498.5" stroke="#D9D9D9" stroke-opacity="0.2" stroke-width="3" />
      <circle cx="600" cy="-4" r="598.5" stroke="#D9D9D9" stroke-opacity="0.2" stroke-width="3" />
      <circle cx="600" cy="-4" r="298.5" stroke="#D9D9D9" stroke-opacity="0.2" stroke-width="3" />
      <circle cx="1085" cy="98" r="15" fill="#F3F3F3" />
      <circle cx="910" cy="242" r="15" fill="#F3F3F3" />
      <circle cx="115" cy="98" r="15" fill="#F3F3F3" />
    </svg>
  )
}
/**
 * @typedef {import("@prismicio/client").Content.ContactFormSlice} ContactFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSlice>} ContactFormProps
 * @param {ContactFormProps}
 */
const ContactForm = ({ slice }) => {
  return (
    <section
      className="relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Orbit />
      <Container size="lg" className="my-20 relative z-20">
        <div className="p-8 md:p-12 bg-latte rounded-2xl">
          <div className="text-center">
            <span className="text-eyebrow text-brown-sugar">{slice.primary.eyebrow}</span>
            <div className="text-4xl mt-5">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="mt-8">
              <PrismicRichText field={slice.primary.subtitle} />
            </div>
          </div>
          <form className="mt-12 grid grid-cols-1 gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="first_name"
                placeholder="First name"
                type="text"
                className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
              />
              <input
                name="last_name"
                placeholder="Last name"
                type="text"
                className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
              />
            </div>
            <input
              name="company"
              placeholder="Company"
              type="text"
              className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="email"
                placeholder="Email"
                type="text"
                className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
              />
              <input
                name="phone"
                placeholder="Telephone"
                type="text"
                className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              type="text"
              className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactForm
