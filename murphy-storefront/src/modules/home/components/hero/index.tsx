import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import HeroImage from "/public/hero.jpg"
import AppImage from "/public/app_demo.png"
import Image from "next/image"

const Hero2 = () => {
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
          <button className="py-4 px-8 bg-[#074790] rounded-lg text-white">
            Donate Now
          </button>
        </a>
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 py-8 w-full border-b border-ui-border-base relative bg-ui-bg-subtle overflow-hidden">
      <div className="content-container inset-0 z-10 flex justify-center items-center text-center gap-6">
        <div className="transform ease-in-out duration-500 h-[200px] w-[60%] hover:scale-105 bg-[#569426] rounded-lg flex justify-between overflow-hidden">
          <div className="text-3xl text-white font-bold p-8 text-left leading-tight flex flex-col justify-between">
            <div>
              Every Item You Buy <br />
              Sends Hope to Africa
            </div>
            <div className="text-lg">Join Our Mission to Uplift Uganda.</div>
          </div>
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="h-full w-1/2 object-cover"
          />
        </div>
        <div className="transform ease-in-out duration-500 hover:scale-105 h-[200px] bg-[#064790] w-[40%] rounded-lg text-left flex">
          <div className="text-3xl text-white font-bold p-8 text-left leading-tight flex flex-col justify-between">
            <div>Pen Pal Program</div>
            <div className="text-lg">
              Join our pen pal program and connect
              <br />
              with children in Uganda.
            </div>
          </div>
          <Image
            src={AppImage}
            alt="Hero Image"
            className="h-full w-auto object-cover"
          />
        </div>
      </div>

      <div className="content-container inset-0 z-10 flex justify-center items-center text-center gap-6">
        <div className="hover:scale-105 transform ease-in-out duration-500 h-[50px] bg-slate-900 w-1/3 rounded-lg text-left flex">
          <div className="text-xl text-white font-bold px-8 text-left leading-tight flex flex-col justify-center">
            <div>Learn about our mission.</div>
          </div>
        </div>
        <div className="hover:scale-105 transform ease-in-out duration-500 h-[50px] bg-slate-900 w-1/3 rounded-lg text-left flex">
          <div className="text-xl text-white font-bold px-8 text-left leading-tight flex flex-col justify-center">
            <div>Send a care package.</div>
          </div>
        </div>
        <div className="hover:scale-105 transform ease-in-out duration-500 h-[50px] bg-slate-900 w-1/3 rounded-lg text-left flex">
          <div className="text-xl text-white font-bold px-8 text-left leading-tight flex flex-col justify-center">
            <div>Become a volunteer.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
