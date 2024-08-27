import {Router} from 'express'
import { atualizar, atualizarEmail, casdastrar, detalhar, excluir, listar } from './controladores/instrutores'


const rotas = Router()

// listar todos os instrutores
rotas.get('/instrutores', listar)

// detalhar as informaçoes de um instrutor
rotas.get('/instrutores/:id',detalhar)

// cadastrar instrutor
rotas.post('/instrutores', casdastrar)

// editar um instrutor
rotas.put('/instrutores/:id', atualizar)
rotas.patch('/instrutores/:id/alterarEmail', atualizarEmail)

// excluir um instrutor
rotas.delete('/instrutores/:id', excluir)

// cadastrar uma aula para um instrutor
// excluir uma aula para um instrutor

export default rotas