import {Router} from 'express'
import { atualizar, atualizarEmail, casdastrar, detalhar, excluir, listar } from './controladores/instrutores'
import { cadastrarAula, excluirAula } from './controladores/aulas'


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
rotas.post('/instrutores/:id/aulas', cadastrarAula)

// excluir uma aula para um instrutor
rotas.delete('/instrutores/:id/aulas/:idAula', excluirAula)

export default rotas