import Foto from '@/assets/Foto.jpeg'
import bgImage from '@/assets/background.jpg'


export function FirstBlock() {
    return (
        <div className="p-6 flex justify-around items-center h-screen">
            <img src={bgImage} alt="bg" className='flex-1 fixed -z-10' />
            <div className='w-1/3 '>
                <h1 className='text-4xl font-bold text-accent-foreground mb-2'>Daniel Campos e Silva
                    <span className='block text-primary'>Full Stack Developer</span>
                </h1>
                <p className='text-sm text-card-foreground leading-relaxed'>
                    21 Anos ,Estudante da UFJF, ex-colaborador do Centro Regional de Inovação e Transferênca de Tecnologia
                    e formando pela Driven Education
                </p>
            </div>
            <img src={Foto} alt="Perfil" className='w-96 rounded-md shadow-lg shadow-red-800' />
        </div>
    )
}