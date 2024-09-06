/* Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades. */

const estoque = [
    { produto: "Teclado", quantidade: 8, minimo: 12 },
    { produto: "Mouse", quantidade: 23, minimo: 35 },
    { produto: "Monitor", quantidade: 15, minimo: 10 },
    { produto: "Mousepad", quantidade: 40, minimo: 55 },
    { produto: "Suporte para Monitor", quantidade: 15, minimo: 25 },
    { produto: "Webcam", quantidade: 20, minimo: 10 },
    { produto: "Roteador", quantidade: 20, minimo: 15 },
    { produto: "Tablet", quantidade: 20, minimo: 30 },
]

estoque.forEach(prod => {
    if (prod.quantidade < prod.minimo) {
        prod.quantidade *= 2
    }
})

console.log("Estoque foi atualizado")
console.log(estoque)