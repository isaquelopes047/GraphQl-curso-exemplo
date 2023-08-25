const { perfis } = require('../data/db');

module.exports = {
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
}