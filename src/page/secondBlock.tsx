import { Button } from "@/components/ui/button"
import { useState } from "react"
import AnimateHeight from "react-animate-height"
import miau from '@/assets/Miau.png'

export function SecondBlock() {

    const [height, setHeight]: any = useState(200)

    return (
        <div className="p-6 flex bg-background h-screen flex-col items-center justify-around">
            <div className="flex items-center flex-col w-5/6">
                <h1 className="text-accent-foreground text-2xl mb-2 font-semibold">Sobre mim</h1>
                <AnimateHeight
                    id="example-panel"
                    duration={500}
                    height={height}
                >
                    <p className='text-md font-normal text-popover-foreground leading-relaxed'>
                        Minha jornada profissional teve início quando fui admitido na Universidade Federal de Juiz de Fora e, posteriormente, passei no processo seletivo para o Setor de Tecnologia da Informação no Centro Regional de Inovação e Transferência de Tecnologia. Durante meu tempo lá, tive a oportunidade de mergulhar no emocionante mundo das startups e empresas, adquirindo um valioso conhecimento sobre normas de proteção de dados, como a LGPD, e a importância da segurança da informação. Além disso, comecei a me aventurar na programação, visando melhorar os processos no centro.
                        Com o passar do tempo, meu desempenho começou a se destacar, e uma das empresas parceiras do centro me convidou para fazer parte de sua equipe. Foi nesse momento que minha carreira começou a evoluir em uma direção emocionante. Passei a trabalhar no back-end da telefonia, lidando com servidores Asterisk IPBX, e aprofundando meu conhecimento em sistemas Linux e Node.js.
                        Em busca de aprimoramento contínuo e novos desafios, tomei a decisão de elevar meu nível de expertise e descobri a proposta da Driven para a formação de desenvolvedores. Foi uma escolha excelente que impulsionou ainda mais minha carreira e minha paixão pela tecnologia.
                        Agora, deixe-me compartilhar um pouco sobre mim além da minha trajetória profissional. Desde a infância, sou apaixonado por computadores, seja para jogar ou para explorar suas infinitas possibilidades. Acompanhar as constantes mudanças e revoluções no mundo da tecnologia sempre me empolgou. Na época do ensino médio, optei por trabalhar na manutenção de computadores em domicílio, uma decisão que considero a melhor que tomei naquela fase da vida. Posteriormente, meu interesse pela programação cresceu exponencialmente, e comecei a investir em cursos online de lógica de programação e linguagens mais básicas.

                    </p>
                </AnimateHeight>
                <Button
                    className="mt-4"
                    aria-expanded={height !== 0}
                    aria-controls="example-panel"
                    onClick={() => setHeight(height === 200 ? 'auto' : 200)}
                >
                    {height === 200 ? 'Ler Mais' : 'Ler Menos'}
                </Button>
            </div>
            <div className="w-5/6 rounded-md mt-2 border-4 border-red-700 border-solid">
                <img src={miau} alt="Miaudelos"  />
            </div>
        </div>
    )
}