"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale"
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animationClasses = {
    "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
    "slide-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
    "slide-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
    scale: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  }

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${animationClasses[animation]} ${className}`}>
      {children}
    </div>
  )
}
