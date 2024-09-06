/*1. Acessando Propriedades de Objetos
Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console. */


let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2024,
    cor: "Prata",
}

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`)
}