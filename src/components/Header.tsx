import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"



export function Header() {

  return (
    <header className="px-6 py-3 flex items-center justify-between border-b bg-black/60 fixed w-full top-0 left-0">
      <h1 className="md:text-xl font-bold text-foreground">DanielCamposDevX</h1>
      <div className="flex gap-3">
        <a href="https://github.com/DanielCamposDe">
          <Button variant={"outline"} className="gap-2">
            <Github className="h-4 w-4" />
            <p className="md:flex hidden">Github</p>
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/daniel-campos-e-silva-37ab48238/">
          <Button variant={"outline"} className="gap-2">
            <Linkedin className="h-4 w-4" />
            <p className="md:flex hidden">Linkedin</p>
          </Button>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5532988757666&text=Contato%20Pelo%20Site!!%F0%9F%98%80">
          <Button variant={"outline"} className="gap-2">
            <p className="md:flex hidden">Contato</p>
          </Button>
        </a>

      </div>
    </header>
  )
}


