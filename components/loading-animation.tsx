"use client"

import { useEffect, useState } from "react"
import Link from "next/link"


export function LoadingAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + Math.random() * 10, 100)
        if (newProgress === 100) {
          clearInterval(timer)
        }
        return newProgress
      })
    }, 200)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md px-4">
        {/* Logo placeholder */}
        <div className="text-center flex justify-center mb-2">
          <h1 className="">
            <Link href="/" className="flex items-center justify-center" aria-label="Inicio">
              <img
                src="/innataBlack.png"
                alt="Logo Innata"
                className="h-36 w-auto max-w-[340px] mx-auto"
              />
            </Link>
          </h1>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center mb-6 space-x-3">
          <div
            className="w-4 h-4 rounded-full bg-[#4A102A]"
            style={{
              animation: "bounce 1.4s infinite ease-in-out both",
              animationDelay: "0s",
            }}
          />
          <div
            className="w-4 h-4 rounded-full bg-[#85193C]"
            style={{
              animation: "bounce 1.4s infinite ease-in-out both",
              animationDelay: "0.2s",
            }}
          />
          <div
            className="w-4 h-4 rounded-full bg-[#C5172E]"
            style={{
              animation: "bounce 1.4s infinite ease-in-out both",
              animationDelay: "0.4s",
            }}
          />
          <div
            className="w-4 h-4 rounded-full bg-[#FCF259]"
            style={{
              animation: "bounce 1.4s infinite ease-in-out both",
              animationDelay: "0.6s",
            }}
          />
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #4A102A 0%, #85193C 50%, #C5172E 100%)",
            }}
          />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-[#85193C] font-medium">Preparando tu experiencia Innata</p>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
            opacity: 0.5;
          }
          40% { 
            transform: scale(1.0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
