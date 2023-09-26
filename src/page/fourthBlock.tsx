import Icons from "@/components/icons";


export function FourthBlock() {

    return (
        <div className="p-6 flex flex-col min-h-screen bg-black/90">
            <div className="flex flex-1 justify-around items-center leading-relaxed md:flex-row flex-col">
                <Icons />
                <div className="md:w-1/2 w-full">
                    <h1 className="text-xl mb-3 font-medium">Experiências e Escolaridade:</h1>
                    <li className="text-lg">Suporte e Desenvolvimento BemMelhor SI</li>
                    <p className="text-sm mb-8">Trabalhando com Back-End da telefonia AsteriskIPBX puro, Node ,Javascript,Mongo e Postgree</p>
                    <li className="text-lg">Formando do curso de programação Full Stack da Driven Education</li>
                    <p className="text-sm mb-8">Além de reforçar meus conhecimentos aprendi várias coisas novas e me preparei mais ainda para o mercado de trabalho</p>
                    <li className="text-lg">Bolsista do Centro Regional de Inovação e Transferência de Tecnologia</li>
                    <p className="text-sm mb-8">Aqui aconteceu minha inserção no mercado de inovação e empreendedorismo, assim como interagi com servidores , proteção de dados LGPD, desenvolvimento de software para melhora do workflow e banco de dados</p>
                    <li className="text-lg">Bacharelado em Ciências Exatas pela UFJF</li>
                    <p className="text-sm mb-8">Formando da UFJF na area de Ciências Exatas</p>
                </div>
            </div>

        </div>
    )
}