"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import {
  HelpCircle,
  AlertCircle,
  BarChart2,
  Plus,
  Trash2,
  Edit,
} from "lucide-react"
import CardSection from "./CardSection"
import TabsSection from "./TabsSection"
import HistoricalDataTable from "./HistoricalDataTable"
import PricingScenarioSkus from "./PricingScenarioSkus"

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col bg-gray-900 text-white">
      <header className="flex items-center justify-between bg-gray-800 p-4">
        <div className="flex items-center space-x-4">
          <img src="/nestle-13.svg" alt="Company Logo" className="w-32" />

          <h1 className="text-xl font-semibold">Pricing Events</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-700">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cafes">Cafes</SelectItem>
              <SelectItem value="all">ALL</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-700">
              <SelectValue placeholder="Select Channel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="channel1">Channel 1</SelectItem>
              <SelectItem value="channel2">Channel 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-700">
              <SelectValue placeholder="Select Forecast" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="forecast1">Forecast 1</SelectItem>
              <SelectItem value="forecast2">Forecast 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <AlertCircle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <BarChart2 className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={50}>
                <TabsSection />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <CardSection />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={50}>
                <HistoricalDataTable />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <PricingScenarioSkus />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  )
}
