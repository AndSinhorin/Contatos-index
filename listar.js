let contatos = require('./contatos')
//let index = contatos.findIndex(contato => contato.id === id)

function listarContatos(){
    for (let i = 0; i < contatos.length; i++){
        const contato = contatos[i]
        console.log(`
        ID: ${contato.id},
        Nome: ${contato.nome},
        Email: ${contato.email},`)
            for (let j = 0; j < contato.telefones.length; j++) {
             console.log(` ${j+1}. ${contato.telefones[j]}`)
        }
            console.log('')
    }
}
module.exports = listarContatos