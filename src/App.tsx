import { Header } from "./components/Header"
import { Separator } from "./components/ui/separator"
import { FirstBlock } from "./page/firstBlock"
import { SecondBlock } from "./page/secondBlock"
import { ThirdBlock } from "./page/thirdBlock"




export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col">
        <FirstBlock />
        <Separator />
        <SecondBlock />
        <Separator />
        <ThirdBlock />
      </main>
    </div>
  )
}


