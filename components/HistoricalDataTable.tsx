import React from "react"
import { ScrollArea } from "./ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

export default function HistoricalDataTable() {
  return (
    <ScrollArea className="h-full">
      <div className="bg-gray-800 p-4">
        {/* <h3 className="mb-4 text-lg font-semibold">Historical Data</h3> */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>Volume Forecast</TableHead>
              <TableHead>Volume Price</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Value Forecast</TableHead>
              <TableHead>Unit Price</TableHead>
              <TableHead>Units</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                date: "Jan 2023",
                volume: "216,677 kg",
                volumeForecast: "220,566 kg",
                volumePrice: "MX$542.86",
                value: "MX$117,624,360",
                valueForecast: "MX$115,226,655",
                unitPrice: "MX$108.57",
                units: "1,083,386",
              },
              {
                date: "Feb 2023",
                volume: "149,164 kg",
                volumeForecast: "149,575 kg",
                volumePrice: "MX$573.43",
                value: "MX$85,535,314",
                valueForecast: "MX$78,417,602",
                unitPrice: "MX$114.69",
                units: "745,820",
              },
              {
                date: "Mar 2023",
                volume: "137,720 kg",
                volumeForecast: "138,289 kg",
                volumePrice: "MX$595.13",
                value: "MX$81,960,764",
                valueForecast: "MX$72,911,703",
                unitPrice: "MX$119.03",
                units: "688,598",
              },
              {
                date: "Apr 2023",
                volume: "132,700 kg",
                volumeForecast: "133,001 kg",
                volumePrice: "MX$616.98",
                value: "MX$81,960,764",
                valueForecast: "MX$72,911,703",
                unitPrice: "MX$119.03",
                units: "688,598",
              },
              {
                date: "May 2023",
                volume: "132,700 kg",
                volumeForecast: "133,001 kg",
                volumePrice: "MX$616.98",
                value: "MX$81,960,764",
                valueForecast: "MX$72,911,703",
                unitPrice: "MX$119.03",
                units: "688,598",
              },
              {
                date: "Jun 2023",
                volume: "132,700 kg",
                volumeForecast: "133,001 kg",
                volumePrice: "MX$616.98",
                value: "MX$81,960,764",
                valueForecast: "MX$72,911,703",
                unitPrice: "MX$119.03",
                units: "688,598",
              },
              {
                date: "Jul 2023",
                volume: "132,700 kg",
                volumeForecast: "133,001 kg",
                volumePrice: "MX$616.98",
                value: "MX$81,960,764",
                valueForecast: "MX$72,911,703",
                unitPrice: "MX$119.03",
                units: "688,598",
              },
              {
                date: "Aug 2023",
                volume: "132,700 kg",
                volumeForecast: "133,001 kg",
                volumePrice: "MX$616.98",
                value: "MX$81,960,764",
                valueForecast: "MX$72,911,703",
                unitPrice: "MX$119.03",
                units: "688,598",
              },
              {
                date: "Sep 2023",
                volume: "132,700 kg",
                volumeForecast: "133,001 kg",
                volumePrice: "MX$616.98",
                value: "MX$81,960,764",
                valueForecast: "MX$72,911,703",
                unitPrice: "MX$119.03",
                units: "688,598",
              },
              {
                date: "Oct 2023",
                volume: "132,700 kg",
                volumeForecast: "133,001 kg",
                volumePrice: "MX$616.98",
                value: "MX$81,960,764",
                valueForecast: "MX$72,911,703",
                unitPrice: "MX$119.03",
                units: "688,598",
              },
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.volume}</TableCell>
                <TableCell>{row.volumeForecast}</TableCell>
                <TableCell>{row.volumePrice}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell>{row.valueForecast}</TableCell>
                <TableCell>{row.unitPrice}</TableCell>
                <TableCell>{row.units}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ScrollArea>
  )
}
