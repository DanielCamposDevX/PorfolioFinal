import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import Miaudelos from "@/assets/Miaudelos.png"
import resumeai from "@/assets/resume-a.png"
import mywallet from "@/assets/wallet.png"
import cineflex from "@/assets/cineflex.png"
import zaprecall from "@/assets/ZapRecall.png"
import parrots from "@/assets/Parrots.png"
import carshop from "@/assets/carshop.png"

export function ThirdBlock() {

    const projects = [
        { name: 'Miaudelos', img: Miaudelos, desc: 'Encontre o Gato perfeito para seu filme ou sessão de fotos!', link: 'https://miaudelos-front.vercel.app/' },
        { name: 'Resume.AI', img: resumeai, desc: 'Utilização de Inteligência artificial na extração de informação de vídeos', link: 'https://resume-ai-dan.vercel.app/' },
        { name: 'My Wallet', img: mywallet, desc: 'Quer manter suas contas em um só lugar? só usar o My-Wallet', link: 'https://my-wallet-front-peach-three.vercel.app/' },
        { name: 'CineFlex', img: cineflex, desc: 'App para Cinemas e Ingressos', link: 'https://projeto-cineflex-ashen.vercel.app/' },
        { name: 'ZapRecall', img: zaprecall, desc: 'App para ajudar a decorar informações e acompanhar sua melhora', link: 'https://zap-recall-brown.vercel.app/' },
        { name: 'ParrotCardGame', img: parrots, desc: 'Jogo da memória com html css e Javascript', link: 'https://projeto4-chi.vercel.app/' },
        { name: 'CarShop !WYP!', img: carshop, desc: 'Site de Concessionária de carros', link: 'https://car-shop-sigma.vercel.app/' },

    ]



    return (

        <div className="p-6 flex bg-red-700/50 h-screen flex-col items-center justify-center">
            <h1 className="text-accent-foreground text-2xl font-semibold mb-20"> Meus Sites</h1>
            <div className="w-5/6 flex overflow-x-scroll custom-scrollbar p-2">
                {projects.map((project, index) => (
                    <Card key={index} className="md:min-w-[450px] min-w-[200px] flex flex-col items-center mx-3 hover:shadow-md hover:shadow-white/60 hover:cursor-pointer hover:transition">
                        <a href={project.link} className="flex-1">
                            <CardHeader className="text-xl font-semibold">{project.name}</CardHeader>
                            <CardContent><img src={project.img} alt={project.img.toString()} /></CardContent>
                            <CardDescription className="pb-4 w-11/12 text-center md:text-sm text-xs">{project.desc}</CardDescription>
                        </a>
                    </Card>
                ))}
            </div>
        </div>
    )
}