/* Modificando Objetos em um Array
Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço. */

const produtos = [
    { nome: "Notebook", preco: 3000.00, desconto: 0 },
    { nome: "Celular", preco: 2000.00, desconto: 0 },
    { nome: "Tablet", preco: 1300.00, desconto: 0 },
    { nome: "Smartwatch", preco: 900.00, desconto: 0 },
    { nome: "Fone de Ouvido", preco: 150.00, desconto: 0 },
]

produtos.forEach(produto => {
    produto.desconto = 0.1
    const precoComDesconto = produto.preco - (produto.preco * produto.desconto)
    console.log(`Produto: ${produto.nome} - Preço c/ Desconto: R$${precoComDesconto.toFixed(2)}`)
})