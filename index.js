const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');

const usuarios = [
    {
        id: 1,
        nome: 'Joao Silva',
        email: 'jssilve@gmail.com',
        idade: 29,
        perfil_id: 1
    }, {
        id: 2,
        nome: 'Isaque Lopes',
        email: 'Isaque@gmail.com',
        idade: 24,
        perfil_id: 2
    }, {
        id: 3,
        nome: 'Bianca Blaska',
        email: 'Bianca@gmail.com',
        idade: 22,
        perfil_id: 1
    }
]

const perfis = [
    { id: 1, nome: 'Comum'},
    { id: 2, nome: 'Adminstrador'},
]

const resolvers = {
    Produto: {
        precoComDesconto(produto){
            if(produto.desconto) {
                return produto.preco * (1 - produto.desconto)
            } else {
                return produto.preco
            }
        }
    },
    Usuario: {
        vip(usuario){
            return usuario.vip = true
        },
        salario(ususario) {
            return ususario.salario_real
        },
        perfil(usuario) {
            const result = perfis
                .filter(perfis => perfis.id === usuario.perfil_id)
            return result ? result[0] : null
        }
    },
    Query: {
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
}

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executanto em ${url}`)
})