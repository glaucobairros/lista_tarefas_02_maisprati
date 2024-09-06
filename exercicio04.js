/* Iterando Sobre Arrays de Objetos
Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console. */

const pessoas = [
    { nome: "Glauco", idade: 34, cidade: "Sapucaia do Sul" },
    { nome: "Lucas", idade: 24, cidade: "Curitiba" },
    { nome: "Diego", idade: 40, cidade: "Porto Alegre" },
    { nome: "João", idade: 43, cidade: "São Paulo" }
]

console.log('**Lista de Pessoas**')
for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome} - Idade: ${pessoa.idade} - Cidade: ${pessoa.cidade}`)
}