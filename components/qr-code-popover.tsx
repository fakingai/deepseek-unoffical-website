"use client"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Download } from "lucide-react"

interface QRCodePopoverProps {
  title: string
  description?: string
}

export function QRCodePopover({ title, description }: QRCodePopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center">
          <Download className="mr-2 h-4 w-4" />
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-medium text-center">{title}</h3>
          {description && <p className="text-sm text-muted-foreground text-center">{description}</p>}
          <div className="h-48 w-48 bg-gray-200 flex items-center justify-center">
            <span className="text-sm text-gray-500">扫描下载二维码</span>
          </div>
          <p className="text-xs text-muted-foreground text-center">扫描上方二维码下载安装 Android 版应用</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
