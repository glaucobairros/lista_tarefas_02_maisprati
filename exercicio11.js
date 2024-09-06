/* Agrupando Elementos com forEach
Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente. */

const pedidos = [
    { cliente: "Glauco", produto: "Monitor", quantidade: 2 },
    { cliente: "Maria", produto: "Mouse", quantidade: 3 },
    { cliente: "José", produto: "Teclado", quantidade: 1 },
    { cliente: "Glauco", produto: "Cabo de rede", quantidade: 5 },
    { cliente: "Maria", produto: "Cabo HDMI", quantidade: 4 },
    { cliente: "José", produto: "Roteador", quantidade: 3 },
    { cliente: "Cláudio", produto: "Webcam", quantidade: 2 },
    { cliente: "Glauco", produto: "Cabo HDMI", quantidade: 3 },
]

const totalProdutosPorCliente = {}

pedidos.forEach(pedido => {
    if (totalProdutosPorCliente[pedido.cliente]) {
        totalProdutosPorCliente[pedido.cliente] += pedido.quantidade
    } else {
        totalProdutosPorCliente[pedido.cliente] = pedido.quantidade
    }
})

console.log('Total de Pedidos por cliente:')
console.log(totalProdutosPorCliente)