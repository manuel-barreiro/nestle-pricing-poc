import React from "react"
import { ScrollArea } from "./ui/scroll-area"
import { Card, CardContent } from "./ui/card"

export default function CardSection() {
  return (
    <ScrollArea className="h-full">
      <div className="bg-gray-800 p-4">
        <h3 className="mb-4 text-lg font-semibold">
          NESCAFE CLASICO Dawn Frasco 12x50g_JP
        </h3>
        <div className="mb-4 grid grid-cols-2 gap-4">
          {[
            {
              label: "Change in Value",
              value: "-2.89%",
              subValue: "-MX$1,117,624",
            },
            {
              label: "Change in Volume (kg)",
              value: "-9.08%",
              subValue: "-20,566 kg",
            },
            {
              label: "Market Share (Value)",
              value: "-6.07%",
              subValue: "From 47.07% to 41%",
            },
            {
              label: "Market Share (Units)",
              value: "-6.24%",
              subValue: "From 46.24% to 40%",
            },
            {
              label: "Weighted Price Change",
              value: "7.24%",
              subValue: "+MX$8.51",
            },
          ].map((item, index) => (
            <Card key={index} className="bg-gray-700">
              <CardContent className="p-4">
                <div className="text-sm text-gray-400">{item.label}</div>
                <div
                  className={`text-2xl font-bold ${item.value.startsWith("-") ? "text-red-500" : "text-green-500"}`}
                >
                  {item.value}
                </div>
                <div className="text-sm text-gray-400">{item.subValue}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}
