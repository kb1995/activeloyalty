import { asDate } from "@prismicio/client"

const formatDate = (date) => {
  return asDate(date)?.toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export default formatDate
