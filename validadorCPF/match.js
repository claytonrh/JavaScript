// o match é uma funcionalidade para quando você quer buscar uma informação em um conjunto de dados 
// mas você não tem certeza se está lá

const textoNaoEstruturado = 'Meu CPF é 007.516.569-41';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}') // isto é uma expressão regular(ler a respeito)

console.log(textoNaoEstruturado.match(regex));

// tentar aplicar dentro do imput do site validador CPF

