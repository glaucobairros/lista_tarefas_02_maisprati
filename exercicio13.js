/* Implementando um Carrinho de Compras
Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */


const carrinho = {
    itens: [
        { nome: "Teclado", quantidade: 1, precoUnitario: 150.00 },
        { nome: "Mouse", quantidade: 1, precoUnitario: 70.00 },
        { nome: "Monitor", quantidade: 2, precoUnitario: 830.00 },
        { nome: "Webcam", quantidade: 1, precoUnitario: 700.00 },
        { nome: "Roteador", quantidade: 3, precoUnitario: 160.00 },
        { nome: "Pendrive", quantidade: 3, precoUnitario: 35.00 }
    ]
}

let valorTotal = 0

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario
})

console.log(`Valor Total do carrinho: R$${valorTotal.toFixed(2)}`)