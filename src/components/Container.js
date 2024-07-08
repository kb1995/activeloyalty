import cn from "classnames"

export const Container = ({ as: Comp = "div", children, size = "default", className = "", noPadding = false }) => {
  const containerSize = cn({
    "max-w-7xl": size === "default",
    "": size === "full",
    "max-w-5xl": size == "xl",
    "max-w-4xl": size == "lg",
    "max-w-3xl": size == "md",
    "max-w-2xl": size == "sm",
  })

  const paddingClass = cn({
    "px-6 sm:px-7 lg:px-8": !noPadding,
  })

  return (
    <Comp className={cn("mx-auto w-full", className, paddingClass, containerSize)}>{children}</Comp>
  )
}
