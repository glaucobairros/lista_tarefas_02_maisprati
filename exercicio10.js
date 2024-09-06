/* Criando Relatórios com Objetos e Arrays
Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */

const vendas = [
    { produto: "Teclado", quantidade: 5, valor: 150.00 },
    { produto: "Mouse", quantidade: 9, valor: 70.00 },
    { produto: "Tablet", quantidade: 7, valor: 1350.00 },
    { produto: "Monitor", quantidade: 3, valor: 830.00 },
    { produto: "Fone de Ouvido", quantidade: 10, valor: 200.00 },
]

let valorTotalVendas = 0

vendas.forEach(venda => {
    const valorVenda = venda.valor * venda.quantidade
    valorTotalVendas += valorVenda
})

console.log(`Valor Total da Venda: R$${valorTotalVendas.toFixed(2)}`)