"use client"

import Button from "@/components/Button"
import { useState } from "react"

const Subscribe = ({
  title = "Email address",
  color = "orange",
  className = "mx-auto mt-10 flex flex-col gap-6 items-start max-w-md",
}) => {
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get("email")

    const response = await fetch("/api/subscriber", {
      body: JSON.stringify({
        email,
      }),
      method: "POST",
    })

    if (response.status >= 400) {
      alert("There was an error. Please try again!")
      return false
    }

    setSuccess(true)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={className}>
      <div className="w-full">
        <label className="pb-2.5 text-al-eyebrow-small block" htmlFor="email-address">
          {title}
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-md text-black border-0 bg-white px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        {success ? <p className="text-white text-xs mt-2">Thank you for subscribing!</p> : null}
      </div>
      <div>
        <Button type="submit" color={color}>
          Subscribe
        </Button>
      </div>
    </form>
  )
}

export default Subscribe
