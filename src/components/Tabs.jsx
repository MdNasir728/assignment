

import {
  Tabs,

  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { AArrowDown } from "lucide-react"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account <AArrowDown /></TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
       
    </Tabs>
  )
}
