import Link from "next/link"
import cn from "classnames"

const Button = ({ color = "green", children, href = null, ...props }) => {
  const classNames = cn(
    "rounded-full py-3 px-6 font-semibold leading-none hover:brightness-90 duration-150",
    {
      "text-white bg-forest-dark": color === "green",
      "text-black bg-brown-sugar": color === "orange",
    }
  )
  if (href) {
    return (
      <Link className={classNames} href={href}>
        {children}
      </Link>
    )
  } else {
    return (
      <button className={classNames} {...props}>
        {children}
      </button>
    )
  }
}

export default Button
