const { usuarios, perfis } = require('../data/db')

module.exports = {
    ProdutoEmDestaque() {
        return {
            nome: 'Leite',
            preco: 10,
            desconto: 0.15
        }
    },
    Ola() {
        return 'Basta Retornar uma string'
    },
    HoraCerta() {
        const data = new Date()
        return data.toLocaleString();
    }, 
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Isaque Lopes',
            email: 'isaque.lopes0@gmail.com',
            idade: 23,
            salario_real: 2800.00,
            vip: true
        }
        },
    numerosMegaSena(){
        // return [4, 8, 13, 27, 33, 54]
        const crescente = (a, b) => a - b;
        return Array(6).fill(0)
                .map(n => parseInt(Math.random() * 60 + 1))
                .sort(crescente)
    },
    usuarios(){
        return usuarios
    },
    usuario(_, { id }) {
        const sels = usuarios
            .filter(u => u.id == id)
        return sels ? sels[0] : null
    },
    /* CONSULTA DE PERFIS DO ARRAY PERFIL*/
    perfis(){
        return perfis
    },
    perfilId(_, {id}){
        const result = perfis
            .filter(perfis => perfis.id == id)
        return result ? result[0] : null
    }
}
