"use client"

import Button from "@/components/Button"
import { useState } from "react"

const Subscribe = () => {
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
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="mx-auto mt-10 flex flex-col gap-4 items-start max-w-md"
    >
      <div className="min-w-0 flex-auto">
        <label className="mb-2 block" htmlFor="email-address">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-md border-0 bg-white px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        {success ? <p className="text-white text-xs mt-2">Thank you for subscribing!</p> : null}
      </div>
      <Button type="submit" color="orange">
        Subscribe
      </Button>
    </form>
  )
}

export default Subscribe
