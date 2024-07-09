import Link from "next/link"
import { Container } from "./Container"

export function Footer({ settings }) {
  return (
    <footer className="bg-white py-10">
      <Container>
        <div className="text-center grid grid-cols-1 gap-6">
          <div className="flex items-center gap-4 justify-center">
            <a href={settings.data.linkedin_url.url} target="_blank">
              <svg
                className="h-5 w-5 hover:text-gray duration-75"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7865 0C22.4937 0 23.172 0.280951 23.6721 0.781048C24.1722 1.28115 24.4531 1.95942 24.4531 2.66667V21.3333C24.4531 22.0406 24.1722 22.7189 23.6721 23.219C23.172 23.719 22.4937 24 21.7865 24H3.11979C2.41255 24 1.73427 23.719 1.23417 23.219C0.734076 22.7189 0.453125 22.0406 0.453125 21.3333V2.66667C0.453125 1.95942 0.734076 1.28115 1.23417 0.781048C1.73427 0.280951 2.41255 0 3.11979 0H21.7865ZM21.1198 20.6667V13.6C21.1198 12.4472 20.6618 11.3416 19.8467 10.5264C19.0315 9.71128 17.9259 9.25333 16.7731 9.25333C15.6398 9.25333 14.3198 9.94667 13.6798 10.9867V9.50667H9.95979V20.6667H13.6798V14.0933C13.6798 13.0667 14.5065 12.2267 15.5331 12.2267C16.0282 12.2267 16.503 12.4233 16.8531 12.7734C17.2031 13.1235 17.3998 13.5983 17.3998 14.0933V20.6667H21.1198ZM5.62646 7.41333C6.22054 7.41333 6.7903 7.17733 7.21038 6.75725C7.63046 6.33717 7.86646 5.76742 7.86646 5.17333C7.86646 3.93333 6.86646 2.92 5.62646 2.92C5.02884 2.92 4.45569 3.1574 4.03311 3.57999C3.61053 4.00257 3.37313 4.57571 3.37313 5.17333C3.37313 6.41333 4.38646 7.41333 5.62646 7.41333ZM7.47979 20.6667V9.50667H3.78646V20.6667H7.47979Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href={settings.data.twitter_url.url} target="_blank">
              <svg
                className="h-5 w-5 hover:text-gray duration-75"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2481 10.533L21.1331 2H18.0601L12.8051 8.517L8.14313 2H1.45312L9.25912 12.91L1.92313 22H4.99713L10.7021 14.93L15.7631 22H22.4531L14.2481 10.533ZM11.8681 13.483L10.4231 11.464L4.81313 3.627H7.12313L11.6511 9.944L13.0941 11.964L19.1121 20.373H16.8021L11.8681 13.483Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href={settings.data.youtube_url.url} target="_blank">
              <svg
                className="h-5 w-5 hover:text-gray duration-75"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path
                  fill="currentColor"
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-2.5 justify-center">
            <Link className="underline font-medium text-lg hover:text-gray duration-75" href="/">
              Home
            </Link>
            <Link
              className="underline font-medium text-lg hover:text-gray duration-75"
              href="/resources/"
            >
              Resources
            </Link>
            <Link
              className="underline font-medium text-lg hover:text-gray duration-75"
              href="/contact/"
            >
              Contact
            </Link>
          </div>
          <p className="text-lg font-medium opacity-50">Copyright 2024 Active Loyalty</p>
        </div>
      </Container>
    </footer>
  )
}
