import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import HeroImage from "/public/hero.jpg"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[70vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle overflow-hidden">
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="absolute top-1/2 left-1/2 w-full h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal text-white"
          >
            Every Item You Buy Sends Hope to Africa
          </Heading>
          <Heading
            level="h2"
            className="text-xl leading-10 text-white font-normal"
          >
            Join Our Mission to Uplift Lives in Uganda
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <button className="py-4 px-8 bg-[#074790] rounded-lg text-white">Donate Now</button>
        </a>
      </div>
    </div>
  )
}

export default Hero
