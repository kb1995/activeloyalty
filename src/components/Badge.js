import cn from "classnames"

const Badge = ({ color = "orange", children }) => {
  return (
    <span
      className={cn(
        "inline-flex uppercase items-center rounded-sm px-2 py-1 text-sm font-semibold",
        {
          "bg-brown-sugar text-black": color === "orange",
        }
      )}
    >
      {children}
    </span>
  )
}

export default Badge
