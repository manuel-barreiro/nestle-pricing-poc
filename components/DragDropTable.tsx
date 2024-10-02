"use client"
import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const DragDropTable = () => {
  const [tableData, setTableData] = useState([
    { id: '1', title: "Clasico", mix: "45.27%", changePrice: "8.20%", changeValue: "-2.04%", changeUnits: "-9.83%", changeVolume: "-13.73%" },
    { id: '2', title: "Dolca", mix: "15.26%", changePrice: "7.49%", changeValue: "-6.45%", changeUnits: "-11.43%", changeVolume: "-13.90%" },
    { id: '3', title: "Decaf", mix: "5.79%", changePrice: "9.31%", changeValue: "-5.91%", changeUnits: "-14.01%", changeVolume: "-17.07%" },
    { id: '4', title: "Cafe de Olla", mix: "5.09%", changePrice: "5.29%", changeValue: "-6.37%", changeUnits: "-10.21%", changeVolume: "-10.39%" },
    { id: '5', title: "Tasters", mix: "3.98%", changePrice: "4.83%", changeValue: "-3.91%", changeUnits: "-7.63%", changeVolume: "-8.67%" },
  ])

  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))
    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(tableData)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setTableData(items)
  }

  if (!enabled) {
    return null
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Mix</TableHead>
            <TableHead>Change Price</TableHead>
            <TableHead>Change Value</TableHead>
            <TableHead>Change Units</TableHead>
            <TableHead>Change Volume</TableHead>
          </TableRow>
        </TableHeader>
        <Droppable droppableId="table">
          {(provided) => (
            <TableBody {...provided.droppableProps} ref={provided.innerRef}>
              {tableData.map((row, index) => (
                <Draggable key={row.id} draggableId={row.id} index={index}>
                  {(provided, snapshot) => (
                    <TableRow
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        background: snapshot.isDragging ? 'rgba(63, 63, 70, 0.5)' : 'transparent',
                      }}
                    >
                      <TableCell className="font-medium">{row.title}</TableCell>
                      <TableCell><Badge variant="outline" className="text-white">{row.mix}</Badge></TableCell>
                      <TableCell><Badge variant="secondary" className="bg-green-700 text-white">{row.changePrice}</Badge></TableCell>
                      <TableCell><Badge variant="destructive">{row.changeValue}</Badge></TableCell>
                      <TableCell><Badge variant="destructive">{row.changeUnits}</Badge></TableCell>
                      <TableCell><Badge variant="destructive">{row.changeVolume}</Badge></TableCell>
                    </TableRow>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </TableBody>
          )}
        </Droppable>
      </Table>
    </DragDropContext>
  )
}

export default DragDropTable