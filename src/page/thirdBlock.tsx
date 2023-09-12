import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Miaudelos from "@/assets/Miaudelos.png"

export function ThirdBlock() {
    return (
        <div className="p-6 flex bg-zinc-700 h-screen flex-col items-center justify-center">
            <h1 className="text-accent-foreground text-2xl font-semibold mb-20"> Meus Sites</h1>
            <div className="w-5/6 flex  overflow-clip justify-start items-center">
                <Card className="w-[450px]">
                   <CardHeader>Miaudelos</CardHeader>
                   <CardContent><img src={Miaudelos} alt="Miaudelos" /></CardContent>
                </Card>
            </div>
        </div>
    )
}