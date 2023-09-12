import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"



export function Header() {

  return (
      <header className="px-6 py-3 flex items-center justify-between border-b bg-black/60 fixed w-full">
        <h1 className="text-xl font-bold text-foreground">DanielCamposDevX</h1>
        <div className="flex gap-3">
          <Button variant={"outline"} className="gap-2">
            <Github className="h-4 w-4"/>
            Github
          </Button>
          <Button variant={"outline"} className="gap-2">
            <Linkedin className="h-4 w-4"/>
            Linkedin
          </Button>
        </div>
      </header>
  )
}


