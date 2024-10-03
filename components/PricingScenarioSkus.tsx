import React, { useState } from "react"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import { Checkbox } from "./ui/checkbox"
import { Badge } from "./ui/badge"
import { Plus, Trash2 } from "lucide-react"

export default function PricingScenarioSkus() {
  const [skuData, setSkuData] = useState([
    {
      id: "1",
      itemGroup: "200G",
      suggestedPrice: "MX$109.90",
      newPrice: "MX$139.98",
      ppk: "MX$699.90",
      materialSap: "12046038",
      increment: "27.4%",
      elasticity: "-2.27",
      isTasty: "Yes",
      changeValue: "-16%",
      changeKg: "-175,046 kg",
      changeUnits: "6.59%",
      absoluteChangeInValue: "MX$42,003,686",
      sales: "9.37%",
    },
    {
      id: "2",
      itemGroup: "350G",
      suggestedPrice: "MX$299.00",
      newPrice: "MX$320.50",
      ppk: "MX$457.86",
      materialSap: "12325574",
      increment: "7.2%",
      elasticity: "-2.74",
      isTasty: "Yes",
      changeValue: "-17.35%",
      changeKg: "-72,775 kg",
      changeUnits: "-11.41%",
      absoluteChangeInValue: "-MX$20,436,617",
      sales: "6.73%",
    },
    {
      id: "3",
      itemGroup: "120G",
      suggestedPrice: "MX$89.00",
      newPrice: "MX$95.00",
      ppk: "MX$791.67",
      materialSap: "12317973",
      increment: "6.7%",
      elasticity: "-1.93",
      isTasty: "Yes",
      changeValue: "-14.17%",
      changeKg: "-52,469 kg",
      changeUnits: "-8.38%",
      absoluteChangeInValue: "-MX$23,014,802",
      sales: "5.30%",
    },
    {
      id: "4",
      itemGroup: "200G",
      suggestedPrice: "MX$109.90",
      newPrice: "MX$139.98",
      ppk: "MX$699.90",
      materialSap: "12046038",
      increment: "27.4%",
      elasticity: "-2.27",
      isTasty: "Yes",
      changeValue: "-16%",
      changeKg: "-175,046 kg",
      changeUnits: "6.59%",
      absoluteChangeInValue: "MX$42,003,686",
      sales: "9.37%",
    },
    {
      id: "5",
      itemGroup: "350G",
      suggestedPrice: "MX$299.00",
      newPrice: "MX$320.50",
      ppk: "MX$457.86",
      materialSap: "12325574",
      increment: "7.2%",
      elasticity: "-2.74",
      isTasty: "Yes",
      changeValue: "-17.35%",
      changeKg: "-72,775 kg",
      changeUnits: "-11.41%",
      absoluteChangeInValue: "-MX$20,436,617",
      sales: "6.73%",
    },
    {
      id: "6",
      itemGroup: "120G",
      suggestedPrice: "MX$89.00",
      newPrice: "MX$95.00",
      ppk: "MX$791.67",
      materialSap: "12317973",
      increment: "6.7%",
      elasticity: "-1.93",
      isTasty: "Yes",
      changeValue: "-14.17%",
      changeKg: "-52,469 kg",
      changeUnits: "-8.38%",
      absoluteChangeInValue: "-MX$23,014,802",
      sales: "5.30%",
    },
  ])
  return (
    <ScrollArea className="h-full">
      <div className="bg-gray-800 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Pricing Scenario SKUs</h3>
          <div className="flex space-x-2">
            <Button variant="destructive" size="sm">
              Out of Date
            </Button>
            <Button variant="secondary" size="sm">
              Adjust Equivalent Group
            </Button>
            <Button variant="default" size="sm">
              Apply Elasticity Model
            </Button>
            <Button variant="secondary" size="sm">
              Price Recommendations
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox />
              </TableHead>
              <TableHead>Item Group</TableHead>
              <TableHead>Suggested Price</TableHead>
              <TableHead>New Price</TableHead>
              <TableHead>PPK</TableHead>
              <TableHead>Material Sap</TableHead>
              <TableHead>Increment</TableHead>
              <TableHead>Elasticity</TableHead>
              <TableHead>Is Tasty</TableHead>
              <TableHead>Absolute Change in Value</TableHead>
              <TableHead>Absolute Change in KG</TableHead>
              <TableHead>Absolute Change in Units</TableHead>
              <TableHead>Sales %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skuData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{row.itemGroup}</TableCell>
                <TableCell>{row.suggestedPrice}</TableCell>
                <TableCell>{row.newPrice}</TableCell>
                <TableCell>{row.ppk}</TableCell>
                <TableCell>{row.materialSap}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="bg-green-700 text-white"
                  >
                    {row.increment}
                  </Badge>
                </TableCell>
                <TableCell className="text-yellow-500">
                  {row.elasticity}
                </TableCell>
                <TableCell>{row.isTasty}</TableCell>
                <TableCell
                  className={
                    row.changeValue.startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {row.changeValue}
                </TableCell>
                <TableCell className="text-red-500">{row.changeKg}</TableCell>
                <TableCell
                  className={
                    row.changeUnits.startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {row.changeUnits}
                </TableCell>
                <TableCell>{row.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex gap-5">
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> Add Sku
          </Button>
          <Button variant="destructive" className="w-full">
            <Trash2 className="mr-2 h-4 w-4" /> Remove Sku
          </Button>
        </div>
      </div>
    </ScrollArea>
  )
}
