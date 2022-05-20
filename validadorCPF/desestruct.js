
// Criando um objeto
const pessoa = {
    nome: 'Clayton',
    sobrenome: 'Salvador',
    idade: '40',
    profissao: 'Reporter'
};

console.log(pessoa);

//SEM DESESTRUCT
// <<<<Uma forma de quebrar esse objeto em varias partes para reutilizar os dados>>>
// let nome = nome.nome;
// let sobrenome = sobrenome.sobrenome;
// let idade = idade.idade;
// let profissão = profissão.profissão;

// COM DESESTRUCT
let {nome, sobrenome, idade, profissao} = pessoa;
console.log(nome, sobrenome, idade, profissao);




