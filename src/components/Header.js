"use client"
import { motion } from "framer-motion"

import Link from "next/link"

import { Container } from "./Container"
import Button from "./Button"

const NavLink = ({ href, text }) => {
  const underlineMotion = {
    rest: { scaleX: 0, duration: 0.8, type: "tween", ease: [0.5, 0, 0.1, 1] },
    hover: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        type: "tween",
        ease: [0.5, 0, 0.1, 1],
      },
    },
  }

  return (
    <motion.a
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="text-al-medium relative"
      href={href}
    >
      <span className="font-semibold">{text}</span>
      <motion.div
        variants={underlineMotion}
        className="absolute -bottom-1 left-0 h-[2px] rounded-full w-full origin-bottom-left bg-forest"
      />
    </motion.a>
  )
}

export const Header = () => {
  return (
    <Container as="header" className="relative z-20">
      <nav className="flex items-center py-10 justify-between">
        <div>
          <Link href="/">
            <img className="h-[45px] w-auto" src="/logo.png" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <NavLink href="/resources/" text="Resources" />

          <Button href="/contact/">Contact us</Button>
        </div>
      </nav>
    </Container>
  )
}
