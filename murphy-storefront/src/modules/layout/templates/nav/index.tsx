import { headers } from "next/headers"
import { Suspense } from "react"

import Image from "next/image"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Logo from "/public/logo.webp"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              <NavLogo />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}

function NavLogo() {
  const imgUrl = Logo

  return (
    <div className="flex items-center">
      <Image
        className="lg:hidden"
        width={48}
        height={48}
        src={imgUrl}
        alt="Murphy Logo"
      />
      <div className="ml-2 hidden lg:block">
        <div className="text-[#064790] font-bold">
          <h1>MURPHY CHARITABLE FOUNDATION UGANDA</h1>
        </div>
        <div className="text-[#67B32E] font-bold flex justify-evenly items-center break-none">
          <div className="bg-[#67B32E] w-full h-[2px] mr-2"></div>
          <div className="whitespace-nowrap">SINCE 2018</div>
          <div className="bg-[#67B32E] w-full h-[2px] ml-2"></div>
        </div>
      </div>
    </div>
  )
}
