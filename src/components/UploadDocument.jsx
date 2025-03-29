import React from 'react'
import { FunnelPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const UploadDocument = () => {
  return (
    <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className=" bg-blue-500 text-white">
                More Filters <FunnelPlus />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Upload Document</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex  flex-col gap-2">
                  <Label htmlFor="name" className="text-right">
                    Document Name
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="flex  flex-col gap-2">
                  <Label htmlFor="username" className="text-right">
                    Document Type
                  </Label>
                  <Input id="username" className="col-span-3" />
                </div>
                <div className="flex  flex-col gap-2">
                  <Label htmlFor="username" className="text-right">
                    Document Remarks
                  </Label>
                  <Input id="username" className="col-span-3" />
                </div>
                <div className="flex  flex-col gap-2">
                  <Label htmlFor="username" className="text-right">
                    Document Type
                  </Label>
                  <Input type='file' id="username" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className='bg-blue-600' onClick={() => alert('Uploaded successfully')}>Submit</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
  )
}

export default UploadDocument