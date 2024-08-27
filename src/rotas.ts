import {Router} from 'express'
import { casdastrar, detalhar, listar } from './controladores/instrutores'


const rotas = Router()

// listar todos os instrutores
rotas.get('/instrutores', listar)

// detalhar as informaçoes de um instrutor
rotas.get('/instrutores/:id',detalhar)

// cadastrar instrutor
rotas.post('/instrutores', casdastrar)

// editar um instrutor
// excluir um instrutor

// cadastrar uma aula para um instrutor
// excluir uma aula para um instrutor

export default rotas