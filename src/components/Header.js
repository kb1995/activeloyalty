import Link from "next/link"

import { Container } from "./Container"
import Button from "./Button"

export const Header = () => {
  return (
    <Container as="header">
      <nav className="flex items-center my-10 justify-between">
        <div>
          <Link href="/">
            <img className="h-[45px] w-auto" src="/logo.png" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link className="text-medium font-semibold" href="/resources/">
            Resources
          </Link>
          <Button href="/contact">Contact us</Button>
        </div>
      </nav>
    </Container>
  )
}
