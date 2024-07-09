"use client"

import { useState } from "react"
import Button from "@/components/Button"
import { Container } from "@/components/Container"
import { PrismicRichText } from "@prismicio/react"

const FORMSPARK_ACTION_URL = "https://submit-form.com/gcRLunbL7"

const Orbit = () => {
  return (
    <svg
      className="absolute z-10 left-1/2 -top-1/4 -translate-x-1/2 -translate-y-1/2"
      width="1200"
      height="1200"
      viewBox="0 0 1200 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="600" cy="600" r="398.5" stroke="#D9D9D9" stroke-opacity="0.2" stroke-width="3" />
      <circle cx="600" cy="600" r="498.5" stroke="#D9D9D9" stroke-opacity="0.2" stroke-width="3" />
      <circle cx="600" cy="600" r="598.5" stroke="#D9D9D9" stroke-opacity="0.2" stroke-width="3" />
      <circle cx="600" cy="600" r="298.5" stroke="#D9D9D9" stroke-opacity="0.2" stroke-width="3" />
      <circle cx="174" cy="339" r="15" fill="#F3F3F3" />
      <circle cx="1085" cy="702" r="15" fill="#F3F3F3" />
      <circle cx="910" cy="846" r="15" fill="#F3F3F3" />
      <circle cx="458" cy="338" r="15" fill="#F3F3F3" />
      <circle cx="115" cy="702" r="15" fill="#F3F3F3" />
      <circle cx="885" cy="319" r="15" fill="#F3F3F3" />
    </svg>
  )
}
/**
 * @typedef {import("@prismicio/client").Content.ContactFormSlice} ContactFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSlice>} ContactFormProps
 * @param {ContactFormProps}
 */
const ContactForm = ({ slice }) => {
  const [submitting, setSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState("")
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData }),
    })
      .then(function (response) {
        setFormData({
          first_name: "",
          last_name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        })
        setFormResponse("Thank you for your submission!")
        setSubmitting(false)
      })
      .catch(function (error) {
        console.log(error)
        setFormResponse("Something went wrong, please try again.")
      })
  }

  return (
    <section
      className="relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Orbit />
      <Container size="lg" className="mt-12 md:my-20 relative z-20">
        <div className="p-8 md:p-12 bg-latte rounded-2xl">
          <div className="text-center">
            <span className="text-al-eyebrow text-brown-sugar">{slice.primary.eyebrow}</span>
            <div className="text-al-4xl mt-5">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="mt-8">
              <PrismicRichText field={slice.primary.subtitle} />
            </div>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} className="mt-12 grid grid-cols-1 gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                value={formData.first_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    first_name: e.target.value,
                  })
                }
                name="first_name"
                placeholder="First name"
                type="text"
                className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
              />
              <input
                value={formData.last_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    last_name: e.target.value,
                  })
                }
                name="last_name"
                placeholder="Last name"
                type="text"
                className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
              />
            </div>
            <input
              value={formData.company}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: e.target.value,
                })
              }
              name="company"
              placeholder="Company"
              type="text"
              className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                name="email"
                placeholder="Email"
                type="text"
                className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
              />
              <input
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                name="phone"
                placeholder="Telephone"
                type="text"
                className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg"
              />
            </div>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              name="message"
              placeholder="Message"
              type="text"
              className="rounded-[10px] placeholder:text-[#B6B6B6] text-lg min-h-[150px]"
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactForm
