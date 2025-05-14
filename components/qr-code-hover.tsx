"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface QRCodeHoverProps {
  title: string
  description?: string
}

export function QRCodeHover({ title, description }: QRCodeHoverProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 300) // Small delay to allow moving to popover
  }

  return (
    <div className="relative w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center">
        <Download className="mr-2 h-4 w-4" />
        {title}
      </Button>

      {isOpen && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-80 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 mb-2">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-medium text-center">{title}</h3>
            {description && <p className="text-sm text-muted-foreground text-center">{description}</p>}
            <div className="h-48 w-48 relative bg-white p-2 rounded-md shadow-sm">
              <Image
                src="/android-qr-code.png"
                alt="Android Download QR Code"
                width={192}
                height={192}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Scan the QR code above to download and install the Android app
            </p>
          </div>
          {/* Triangle pointer */}
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700"></div>
        </div>
      )}
    </div>
  )
}
