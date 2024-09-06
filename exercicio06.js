/* Filtrando Arrays de Objetos
Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico. */

const funcionarios = [
    { nome: "Glauco", cargo: "Analista Pl", salario: 5000 },
    { nome: "Lucas", cargo: "Analista Jr", salario: 3500 },
    { nome: "Diego", cargo: "Gerente", salario: 14000 },
    { nome: "João", cargo: "Coordenador", salario: 8000 }
]

const valorSalario = 4000

for (const funcionario of funcionarios) {
    if (funcionario.salario > valorSalario) {
        console.log(`Nome: ${funcionario.nome} - Cargo: ${funcionario.cargo} - Salário: R$${funcionario.salario}`)
    }
}