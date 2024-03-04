import { Text, clx } from "@medusajs/ui"
import Link from "next/link"
import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"


export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full">
      <nav className="md:flex md:flex-col md:p-4 md:space-y-4">
        <ul className="p-6 md:flex md:flex-row md:p-4 md:space-x-10 md:place-content-center">
          <Link href="/#">
            <li id="about">About</li>
          </Link>
          <Link href="/#">
            <li id="contact">Contact</li>
          </Link>
          <Link href="/#">
            <li id="faq">FAQs</li>
          </Link>
          <Link href="/#">
            <li id="accessibility">Accessibility</li>
          </Link>
          <Link href="/#">
            <li id="partners">Partners</li>
          </Link>
          <Link href="/#">
            <li id="terms-of-use">Terms of Use</li>
          </Link>
          <Link href="/#">
            <li id="privacy-policy">Privacy Policy</li>
          </Link>
        </ul>
        <ul className="flex flex-row p-4 space-x-10 place-content-center">
          <Link href="/#">
            <li id="facebook">F</li>
          </Link>
          <Link href="/#">
            <li id="instagram">I</li>
          </Link>
          <Link href="/#">
            <li id="twitter">X</li>
          </Link>
          <Link href="/#">
            <li id="youtube">Y</li>
          </Link>
        </ul>
      </nav>
      <small id="copyright" className="p-4 text-center w-full">
        Copyright © {(() => new Date().getFullYear())()} Murphy Charitable
        Foundation Uganda. All rights reserved.
      </small>
    </footer>
  )
}
