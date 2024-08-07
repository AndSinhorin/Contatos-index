let contatos = require('./contatos.js')

function editarContatos(index, nome, telefone, email){
    index = contatos.findIndex(contato => contato.id === index)
    if (index !== -1){
        contatos[index] = {id:(contatos[index].id),nome:nome,telefones:telefone,email:email}
    }
}
module.exports = editarContatos