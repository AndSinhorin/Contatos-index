let contatos = require('./contatos.js')

//

function removerContatos(id){
    let index = contatos.findIndex(contato => contato.id === id)
    if (index !== -1){
        contatos.splice(index, 1)
    }
}
module.exports = removerContatos