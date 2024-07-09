import { ModeToggle } from "./theme-provider-button";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

function Navbar(){
        return (
    <nav className="flex justify-between py-5">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Asistente de Tareas
        </h1>

        <div className="flex gap-x-2 item center">
        
       <Link href="/new"  className={ buttonVariants({variant: "secondary"})}
       > Crear Tarea </Link>
           
        <ModeToggle/>

        </div>
    </nav>

    );
}
export default Navbar;