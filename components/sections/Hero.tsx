"use client";

import { useEffect, useRef } from "react";
import { MapPin, Download, Mail } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "@/lib/data";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fade the video out at the end and back in at the start of each loop
    // to mask the browser's hard seek from last frame → frame 0
    video.style.transition = "opacity 0.8s ease-in-out";

    const onTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining < 0.8) {
        video.style.opacity = "0";
      } else if (video.currentTime < 0.8) {
        video.style.opacity = "1";
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — fades in at 3s as video "becomes background" */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 3.0 }}
      />

      {/* Content — each element stagger-reveals starting at 3s */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl flex flex-col gap-6">

          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 3.0 }}
          >
            <span className="inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm">
              {personalInfo.role}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 3.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 3.5 }}
            className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 3.7 }}
            className="flex items-center gap-1.5 text-sm text-white/60"
          >
            <MapPin className="size-4 shrink-0" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 3.9 }}
            className="flex flex-wrap gap-3 pt-2"
          >
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
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-white/20 bg-white/10 text-white text-sm font-medium hover:bg-white/20 backdrop-blur-sm transition-colors"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
