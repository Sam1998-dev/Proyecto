import * as React from "react"

import { Button } from "@/components/ui/button"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader, 
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { createTask } from "@/actions/task-action"

// CODIGO FUNCIONADO
export function TaskForm() {
 // CODIGO FUNCIONADO
   

  return (

<form action={createTask}>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Crear Tarea</CardTitle>
        <CardDescription>Ingrese los siguientes datos</CardDescription>
      </CardHeader>
      <CardContent>
     
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Tarea</Label>
              <Input name= "name" id="name" placeholder="Ingrese tarea"/>
              
              </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Descripcion</Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Describe tarea"
                />
            </div>
                                    
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Prioridad</Label>
              <Select name="priority">
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Baja</SelectItem>
                  <SelectItem value="medium">Media</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                  <SelectItem value="urgent">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button type="submit">Crear Tarea</Button>
      </CardFooter>
    </Card>
    </form>
  );
}
