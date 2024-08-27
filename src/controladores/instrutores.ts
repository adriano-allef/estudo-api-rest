import { Request, Response } from "express"
import  bancodedados  from '../bancoDeDados'

export function listar(req: Request, res: Response) {
    return res.status(200).json(bancodedados.instrutores)
}

export function detalhar(req: Request, res: Response){
    // const id = req.params.id // esse params.id é o mesmo que esta nas rotas (/instrutores/:id)
    const { id } = req.params

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor){
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado(a)'
        })
    }

    return res.status(200).json(instrutor)
}


export function casdastrar(req: Request, res: Response){
    const { nome, email } = req.body

    const novoInstrutor = {
        id: bancodedados.proximoIdentificador ++,
        nome,
        email
    }

    bancodedados.instrutores.push(novoInstrutor)

    return res.status(201).json(novoInstrutor)
}

export function atualizar(req: Request, res: Response){
    const { id } = req.params
    const { nome, email } = req.body

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id ===Number(id)
    })
   
    if(!instrutor) {
        return res.status(404).json({
            mensagem: 'Instrutor nao encontrado'
        })
    }

    instrutor.nome = nome
    instrutor.email = email

    return res.status(204).send()
}

export function excluir(req: Request, res: Response){
    const { id } = req.params
    const { nome, email } = req.body

    const instrutorIndice = bancodedados.instrutores.findIndex((item) => {
        return item.id ===Number(id)
    })
   
    if(instrutorIndice === -1) {
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado'
        })
    }

    bancodedados.instrutores.splice(instrutorIndice, 1)

    return res.status(204).send()
}

export function atualizarEmail(req: Request, res: Response){
    const { id } = req.params
    const { email } = req.body

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id ===Number(id)
    })
   
    if(!instrutor) {
        return res.status(404).json({
            mensagem: 'Instrutor nao encontrado'
        })
    }

    instrutor.email = email

    return res.status(204).send()
}