/* Verificando Propriedades
Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.*/

let livro = {
    titulo: "O Iluminado",
    autor: "Stephen King",
    anoPublicacao: 1977,
    genero: "Terror"
}

let temEditora = false

for (let propriedade in livro) {
    if (propriedade === "editora") {
        temEditora = true
    }
}

if (temEditora === false) {
    livro.editora = "Doubleday"
    console.log('A propriedade "editora" foi adicionada ao objeto livro')
}

console.log(livro)