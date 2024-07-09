import { asDate } from "@prismicio/client"

const formatDate = (date) => {
  return asDate(date)?.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export default formatDate
