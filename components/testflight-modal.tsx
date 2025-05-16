"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { LINKS } from "@/lib/constants"

interface TestFlightModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TestFlightModal({ open, onOpenChange }: TestFlightModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download deepseekClone iOS via TestFlight</DialogTitle>
          <DialogDescription>
            The deepseekClone iOS app is currently in testing. You can participate in the test and download the app
            through TestFlight.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <div className="rounded-md bg-gray-50 p-4 dark:bg-gray-900">
            <h3 className="mb-2 font-medium">Download Steps:</h3>
            <ol className="ml-4 list-decimal text-sm text-muted-foreground">
              <li className="mb-1">Download and install the TestFlight app from the App Store</li>
              <li className="mb-1">Open the link below or scan the QR code to join the test program</li>
              <li className="mb-1">Install deepseekClone in TestFlight</li>
              <li>Test versions are valid for 90 days, we'll notify you before expiration</li>
            </ol>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="h-48 w-48 bg-white p-2 rounded-md shadow-sm flex items-center justify-center">
              <Image
                src="/ios-testflight-qr.png"
                alt="TestFlight Invitation QR Code"
                width={192}
                height={192}
                className="object-contain"
              />
            </div> 
          </div>
        </div>
        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <a
              href={LINKS.DOWNLOAD.IOS_TESTFLIGHT}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Download TestFlight
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
