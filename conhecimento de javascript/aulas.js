// const elementos_do_vetor = [
//   {
//     id: 1,
//     texto: "estudar",
//     completo: false,
//   },
//   {
//     id: 2,
//     texto: "tabalhar",
//     completo: true,
//   },
//   {
//     id: 3,
//     texto: "faculdade",
//     completo: false,
//   },
//   {
//     id: 4,
//     texto: "procastinar",
//     completo: true,
//   },
// ];

// elementos_do_vetor.forEach(function (mapeamento, indice, vetor) {
//   console.log(`${indice + 1}: ${mapeamento.texto}`);
//   console.log(vetor);
// });

// function Pessoa(nome, sobrenome, dataDeNascimento) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.amigos = [];
//   this.hobby = [];
//   this.dataDeNascimento = new Date(dataDeNascimento);

//   this.dataDeNascimento = function () {
//     return this.dataDeNascimento.getFullYear();
//   };

//   this.ObternomeCompleto = function () {
//     return `${this.nome} ${this.sobrenome}`;
//   };

//   this.adicionarAmigo = function (amigo) {
//     this.amigos.push(amigo);
//     amigo.amigos.push(this);
//   };

//   this.Obterinteresses = function (gostos) {
//     this.hobby.push(gostos);
//   };
// }

// const pessoa1 = new Pessoa("Joao", "silva", "9-5-80");
// const pessoa2 = new Pessoa("Beatriz", "Araujo lira", "6-8-2032");

// pessoa1.adicionarAmigo(pessoa2);
// pessoa1.Obterinteresses(["filmes, séries, novelas"]);
// console.log(pessoa1);
// console.log(pessoa2);

// class Pessoa {
//   constructor(nome, sobrenome, nascimento, hobby) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.nascimento = new Date(nascimento);
//     this.hobby = hobby;
//   }
//   obterNome() {
//     return `${this.nome} ${this.sobrenome}`;
//   }
// }

// const pessoa1 = new Pessoa(
//   "julia",
//   "beatriz",
//   "9-3-2032",
//   "cantar,ouvir musica, dançar"
// );
// console.log(pessoa1);

// class Convidados extends Pessoa {
//   constructor(nome, sobrenome, nascimento, hobby, saldo) {
//     super(nome, sobrenome, nascimento, hobby);
//     this.saldo = saldo;
//   }
// }

// const Convidado1 = new Convidados(
//   "allef",
//   "andersen",
//   "9-5-98",
//   ["dançar", "cantar", "sorrir"],
//   2028h
// );
// console.log(Convidado1);

const btn = document.querySelector("#btn");

function clicarbtn(evento) {}

btn.addEventListener("click", clicarbtn);
