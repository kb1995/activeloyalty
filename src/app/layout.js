import "../styles/globals.css"
import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "@/prismicio"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/uly8upg.css" />
      </head>
      <body className="overflow-x-hidden antialiased text-black">
        <main>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </main>
      </body>
    </html>
  )
}
