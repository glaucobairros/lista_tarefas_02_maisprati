/* Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes. */

const filmes = [
    {titulo: "Clube da Luta", diretor: "David Fincher", anoLancamento: 1999},
    {titulo: "O Protetor", diretor: "Antoine Fuqua", anoLancamento: 2014},
    {titulo: "John Wick", diretor: "Chad Stahelski", anoLancamento: 2014},
    {titulo: "Forrest Gump", diretor: "Robert Zemeckis", anoLancamento: 1994},
    {titulo: "A Lista de Schindler", diretor: "Steven Spielberg", anoLancamento: 1993}
]

const tituloDosFilmes = []

filmes.forEach(filme => {
    tituloDosFilmes.push(filme.titulo)
})

console.log(tituloDosFilmes)