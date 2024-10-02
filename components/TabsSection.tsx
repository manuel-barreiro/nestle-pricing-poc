import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ScrollArea } from "./ui/scroll-area"
import DragDropTable from "./DragDropTable"

export default function TabsSection() {
  return (
    <Tabs defaultValue="price-impact" className="h-full">
      <TabsList className="w-full justify-start bg-gray-800">
        <TabsTrigger value="price-impact">Price Impact Analysis</TabsTrigger>
        <TabsTrigger value="market-share">Market Share</TabsTrigger>
        <TabsTrigger value="cmc">CMC</TabsTrigger>
        <TabsTrigger value="competition">Competition</TabsTrigger>
        <TabsTrigger value="elasticities">Elasticities</TabsTrigger>
        <TabsTrigger value="weather">Weather</TabsTrigger>
        <TabsTrigger value="price-ladder">Price Ladder</TabsTrigger>
      </TabsList>
      <TabsContent value="price-impact" className="h-full p-4">
        <ScrollArea className="h-full">
          <DragDropTable />
        </ScrollArea>
      </TabsContent>
    </Tabs>
  )
}
