import Link from "next/link"
import { Container } from "./Container"

export function Footer() {
  return (
    <footer className="bg-white py-10">
      <Container>
        <div className="text-center grid grid-cols-1 gap-6">
          <div className="flex items-center gap-2.5 justify-center">
            <Link className="underline font-medium text-lg" href="/">
              Home
            </Link>
            <Link className="underline font-medium text-lg" href="/resources/">
              Resources
            </Link>
            <Link className="underline font-medium text-lg" href="/contact/">
              Contact
            </Link>
          </div>
          <p className="text-lg font-medium opacity-50">Copyright 2024 Active Loyalty</p>
        </div>
      </Container>
    </footer>
  )
}
