/* Manipulando Objetos Complexos
Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence. */

const empresa = {
    departamentos: [
        { nome: "TI", listaFuncionarios: ["Glauco", "Maria", "José", "Tadeu"] },
        { nome: "Marketing", listaFuncionarios: ["Pedro", "Marcelo", "Ricardo", "Kátia"] },
        { nome: "Gestão de Pessoas", listaFuncionarios: ["Luana", "Alice", "Carla", "Robson"] },
        { nome: "Financeiro", listaFuncionarios: ["Daniel", "Larissa", "Alessandra", "Angélica"] },
    ]
}

for (const i in empresa.departamentos) {
    const departamento = empresa.departamentos[i]

    for (const funcionario of departamento.listaFuncionarios) {
        console.log(`Funcionário: ${funcionario} - Departamento: ${departamento.nome}`)
    }
}