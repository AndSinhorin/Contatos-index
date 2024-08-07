const prompt = require('prompt-sync')()
const listarContatos = require('./listar.js')
const adicionarContatos = require('./adicionar.js')
const removerContatos = require('./remover.js')
const editarContatos = require('./editar.js')
let contatos = require('./contatos.js')

exibirMenu()
function exibirMenu(){
    console.log(`
    -----Menu-----
    1.Listar contatos
    2.Adicionar contato
    3.Editar contato
    4.Remover contatos
    5.Sair
    --------------
    `)
    
    let opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        case '1':
            listarContatos()
            exibirMenu()
            break
        case '2':
            const nome = prompt('Nome: ')
            let telefones = [];
            let telefone;
            while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))){
                telefones.push(telefone)
            }
            const email = prompt('Email: ');
            adicionarContatos(nome, telefones, email);
            console.log('Contato adicionado com sucesso! ');
            exibirMenu()
            break
        case '3':
            listarContatos()
            let index = parseInt(prompt('Escolha o contato para editar: '))
            const novoNome = prompt('Nome: ')
            let novoTelefones = [];
            let novoTelefone;
            while ((novoTelefone = prompt('Telefone (ou deixe em branco para sair): '))){
                novoTelefones.push(novoTelefone)
            }
            const novoEmail = prompt('Email: ');
            editarContatos(index, novoNome, novoTelefones, novoEmail);
            console.log('Contato editado com sucesso! ');
            exibirMenu()
            break
        case '4':
            let id = parseInt(prompt('Escolha qual deseja remover: '))
            console.log('Contato removida com sucesso!')
            removerContatos(id)
            exibirMenu()
        case '5':
            process.exit()
        default:
            console.log('Número invalido!')
    }
}
