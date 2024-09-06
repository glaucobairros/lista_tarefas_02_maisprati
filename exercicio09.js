/* Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos. */

const clientes = [
    {nome: "Glauco", idade: 34, cidade: "Sapucaia do Sul"},
    {nome: "Maria", idade: 65, cidade: "Porto Alegre"},
    {nome: "Tadeu", idade: 19, cidade: "Teutônia"},
    {nome: "José", idade: 30, cidade: "Canoas"},
    {nome: "Eduardo", idade: 41, cidade: "São Leopoldo"},
    {nome: "Larissa", idade: 27, cidade: "Guaíba"},
]

let contadorClientes = 0

clientes.forEach(cliente => {
    if(cliente.idade > 30){
        contadorClientes++
    }
})

console.log(`Quantidade de clientes acima de 30 anos: ${contadorClientes}`)