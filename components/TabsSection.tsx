import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ScrollArea } from "./ui/scroll-area"
import DragDropTable from "./DragDropTable"
import { InteractiveBarChart } from "./InteractiveBarChart"
import { NestlePieChart } from "./NestlePieChart"
import { NestleLineChart } from "./NestleLineChart"
import { NestleRadarChart } from "./NestleRadarChart"

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
      <TabsContent value="market-share" className="h-full p-4">
        <ScrollArea className="h-full">
          <InteractiveBarChart />
        </ScrollArea>
      </TabsContent>
      <TabsContent value="cmc" className="h-full p-4">
        <ScrollArea className="h-full">
          <NestlePieChart />
        </ScrollArea>
      </TabsContent>
      <TabsContent value="competition" className="h-full p-4">
        <ScrollArea className="h-full">
          <NestleLineChart />
        </ScrollArea>
      </TabsContent>
      <TabsContent value="elasticities" className="h-full p-4">
        <ScrollArea className="h-full">
          <NestleRadarChart />
        </ScrollArea>
      </TabsContent>
    </Tabs>
  )
}
