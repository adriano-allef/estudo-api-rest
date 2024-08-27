type TIdentificador = number

type TAulas = {
    id:number
    nome: string
}

type TInstrutores = {
    id: number
    nome: string
    email: string
    aulas?: TAulas[]
}

type TBancodedados ={
    proximoIdentificador: TIdentificador
    proximoIdentificadorAula:TIdentificador
    instrutores: TInstrutores[]
}

const bancodedados: TBancodedados = {
    proximoIdentificador: 3,
    proximoIdentificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Adriano' ,
            email: 'adriano@email.com',
            aulas: [
                { id: 1, nome: 'Aula de API REST' }
            ]
        },
        {
            id: 2,
            nome: 'Maria' ,
            email: 'maria@email.com',
            aulas: []
        }
    ]

}

export default bancodedados