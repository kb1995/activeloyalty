import clsx from "clsx"

export const Heading = ({ as: Comp = "h1", size = "4xl", children, className }) => {
  return (
    <Comp
      className={clsx(
        "font-sans font-semibold tracking-tighter text-slate-800",
        size === "4xl" && "text-al-3xl md:text-al-4xl",
        size === "3xl" && "text-al-3xl",
        size === "2xl" && "text-al-2xl",
        size === "xl" && "text-al-xl",
        className
      )}
    >
      {children}
    </Comp>
  )
}
