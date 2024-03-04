import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[40vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Every Item You Buy Sends Hope to Africa
          </Heading>
          <Heading
            level="h2"
            className="text-xl leading-10 text-ui-fg-subtle font-normal"
          >
            Join Our Mission to Uplift Lives in Uganda
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            Donate Now
            <Github />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
