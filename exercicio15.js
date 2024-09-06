/* Filtrando e Somando Valores
Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas. */

const transacoes = [
    { tipo: "entrada", valor: 250.00 },
    { tipo: "entrada", valor: 300.00 },
    { tipo: "saida", valor: 150.00 },
    { tipo: "entrada", valor: 400.00 },
    { tipo: "saida", valor: 350.00 },
    { tipo: "entrada", valor: 50.00 },
    { tipo: "saida", valor: 180.00 },
    { tipo: "saida", valor: 190.00 },
]

let saldoFinal = 0

transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        saldoFinal += transacao.valor
    }
    else if (transacao.tipo === "saida") {
        saldoFinal -= transacao.valor
    }
})

console.log(`Saldo Final: R$${saldoFinal.toFixed(2)}`)