import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import Miaudelos from "@/assets/Miaudelos.png"

export function ThirdBlock() {
    return (
        <div className="p-6 flex bg-zinc-700 h-screen flex-col items-center justify-center">
            <h1 className="text-accent-foreground text-2xl font-semibold mb-20"> Meus Sites</h1>
            <div className="w-5/6 flex overflow-x-scroll custom-scrollbar p-2">
                <Card className="min-w-[450px] flex flex-col items-center mx-3">
                    <CardHeader className="text-xl font-semibold">Miaudelos</CardHeader>
                    <CardContent><img src={Miaudelos} alt="Miaudelos" /></CardContent>
                    <CardDescription className="pb-4 w-11/12 text-center">Encontre o Gato perfeito para seu filme ou sessão de fotos!</CardDescription>
                </Card>
                <Card className="min-w-[450px] flex flex-col items-center mx-3">
                    <CardHeader className="text-xl font-semibold">Resume.Ai</CardHeader>
                    <CardContent><img src={Miaudelos} alt="Resume.AI" /></CardContent>
                    <CardDescription className="pb-4 w-11/12 text-center">Utilização de Inteligência artificial na extração de informação de vídeos</CardDescription>
                </Card>
                <Card className="min-w-[450px] flex flex-col items-center mx-3">
                    <CardHeader className="text-xl font-semibold">My Wallet</CardHeader>
                    <CardContent><img src={Miaudelos} alt="My-Wallet" /></CardContent>
                    <CardDescription className="pb-4 w-11/12 text-center">Quer manter suas contas em um só lugar? só usar o My-Wallet</CardDescription>
                </Card>
                <Card className="min-w-[450px] flex flex-col items-center mx-3">
                    <CardHeader className="text-xl font-semibold">CineFlex</CardHeader>
                    <CardContent><img src={Miaudelos} alt="CineFlex" /></CardContent>
                    <CardDescription className="pb-4 w-11/12 text-center">App para Cinemas e Ingressos</CardDescription>
                </Card>
            </div>
        </div>
    )
}