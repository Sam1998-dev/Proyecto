
import { TaskCard } from "@/components/task-card";
import prisma from "@/lib/prisma"



async function HomePage() {
  const task = await prisma.task.findMany();
  console.log(task);

 return (

    <div className="grid grid-cols-3 gap-4">
    {task.map((task) => (
   <TaskCard task={task} key={task.id}/>
   
    ))}
    </div>  
  );
}
export default HomePage