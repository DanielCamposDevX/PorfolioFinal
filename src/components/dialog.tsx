import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from "@/components/ui/button"
import { MessageSquare } from 'lucide-react'
import { Textarea } from "./ui/textarea"

type DialogBoxProps = {
    setMessage: (message: MessageT) => void;
    message: MessageT;
};

type MessageT = {
    email: string,
    corpo: string,
    phone: string

}


export function DialogBox({ setMessage, message }: DialogBoxProps) {

    function handleClick(){
        console.log(message)
    }
    return (
        <Dialog>
            <DialogTrigger className="bg-red-700 rounded-md p-2 flex">Ou envie uma mensagem!<MessageSquare className="w-4 h-4 m-1" /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Enviar uma Mensagem:</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value={message.email} onChange={(e) => setMessage({ ...message, email: e.target.value })} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Mensagem" className="text-right">
                            Mensagem
                        </Label>
                        <Textarea id="message" value={message.corpo} onChange={(e) => setMessage({ ...message, corpo: e.target.value })} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={()=>handleClick()}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}