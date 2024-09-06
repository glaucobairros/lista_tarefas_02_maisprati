/* 3. Filtrando Propriedades de Objetos
Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades. */

function filtroPropriedades(produto, valor) {
    let result = {}

    for (let propriedade in produto) {
        if (produto[propriedade] > valor) {
            result[propriedade] = produto[propriedade]
        }
    }
    return result
}

const produto = {
    nome: "Notebook",
    preco: 2500,
    peso: 2.2,
    altura: 2,
    largura: 35.7,
    comprimento: 27.4,
    marca: "Dell",
    categoria: "Eletrônicos",
}

const valorEspecifico = 30
const produtoFiltrado = filtroPropriedades(produto, valorEspecifico)

console.log(`**Propriedades do Produto Filtradas pelo valor ${valorEspecifico}`)
for (let propriedade in produtoFiltrado) {
    console.log(`${propriedade}: ${produtoFiltrado[propriedade]}`)
}