import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiCss3, SiTailwindcss, SiJavascript, SiReact, SiTypescript, SiExpress, SiPostgresql, SiPrisma } from 'react-icons/si';
import { LiaNode } from 'react-icons/lia'


export default function Icons() {
    return (
        <div className='w-1/2 flex flex-col justify-center items-center '>
            <h1 className='text-xl mb-3 font-medium m-10'>Linguagens e Frameworks</h1>
            <div className='text-white p-5 w-1/2 gap-2 flex flex-wrap justify-center rounded'>
                <AiOutlineHtml5 className='text-3xl m-2 text-orange-500' />
                <SiCss3 className='text-3xl m-2 text-blue-600' />
                <SiJavascript className='text-3xl m-2 text-yellow-400' />
                <SiTypescript className='text-3xl m-2 text-blue-700' />
                <SiReact className='text-3xl m-2 text-blue-300' />
                <SiExpress className='text-3xl m-2' />
                <SiTailwindcss className='text-3xl m-2 text-blue-400' />
                <LiaNode className='text-3xl m-2 text-green-600' />
                <SiPostgresql className='text-3xl m-2 text-blue-400' />
                <SiPrisma className='text-3xl m-2 text-white' />
            </div>
        </div>

    )
}