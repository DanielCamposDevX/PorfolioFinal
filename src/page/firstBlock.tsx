import Foto from '@/assets/Foto.jpeg'
import bgImage from '@/assets/background.jpg'


export function FirstBlock() {
    return (
        <div className="p-6 flex justify-around items-center h-screen">
            <img src={bgImage} alt="bg" className='flex-1 fixed -z-10' />
            <div className='md:w-1/3 w-full'>
                <h1 className='md:text-4xl text-xl font-bold text-accent-foreground mb-2'>Daniel Campos e Silva
                    <span className='block text-primary'>Full Stack Developer</span>
                </h1>
                <p className='md:text-sm text-xs text-card-foreground leading-relaxed'>
                    21 Anos ,Estudante da UFJF, ex-colaborador do Centro Regional de Inovação e Transferênca de Tecnologia
                    e formando pela Driven Education
                </p>
            </div>
            <img src={Foto} alt="Perfil" className='w-96 rounded-md shadow-lg shadow-red-800 md:flex hidden' />
        </div>
    )
}