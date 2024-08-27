import { Request, Response } from "express"

type TInstrutores = {
    id: number
    nome: string
    email: string
}

const instrutores: TInstrutores [] = [
    {
        id: 1,
        nome: 'Adriano' ,
        email: 'adriano@email.com',
    },
    {
        id: 2,
        nome: 'Maria' ,
        email: 'maria@email.com',
    }

]

export function listar(req: Request, res: Response) {
    return res.status(200).json(instrutores)
}