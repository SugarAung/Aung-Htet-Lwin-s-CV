import Image from "next/image";
import { MapPin, Download, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            {/* Role badge */}
            <span className="inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground border border-border">
              {personalInfo.role}
            </span>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              {personalInfo.name}
            </h1>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {personalInfo.tagline}
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="size-4" />
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-muted transition-colors"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-card shadow-xl ring-1 ring-border">
                <Image
                  src="/photo.jpg"
                  alt={personalInfo.name}
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-primary/20 -z-10" />
              <div className="absolute -inset-6 rounded-full border border-primary/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
