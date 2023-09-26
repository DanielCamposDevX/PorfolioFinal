import { Instagram } from "lucide-react"


export function FifthBlock() {



    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <div className="flex justify-around md:flex-row flex-col bg-black/60 w-full md:p-24">
                <div className="md:w-1/4 m-5">
                    <h1 className="md:text-3xl text-xl text-red-500">Email Address</h1>
                    <p className="md:text-md">daniel.campos.dev3@gmail.com</p>
                </div>
                <div className="md:w-1/4 m-5">
                    <h1 className="md:text-3xl text-xl text-red-500">Phone Number</h1>
                    <p className="md:text-md">(32)98875-7666</p>
                </div>
                <div className="md:w-1/4 m-5">
                    <h1 className="md:text-3xl text-xl text-red-500">Socials</h1>
                    <p className="md:text-md flex mb-4"><Instagram className="w-4 h-4 m-1" /> @dancamposx</p>
                </div>

            </div>
        </div>
    )
}