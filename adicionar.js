let contatos = require('./contatos.js')
//let index = contatos.findIndex(contato => contato.id === id)

function adicionarContatos(nome,telefones,email){

    let jaExiste = contatos.find(cont => cont.email === email);

    if (jaExiste){
        throw new Error('Já exite um contato com esse email');
    }else{
        contatos.push({id: (contatos[contatos.length -1].id) +1, nome,telefones,email});
    }
}

module.exports = adicionarContatos