// ==============================
// Lista de usuários
// ==============================
const usuarios = [
  { 
    nome: "Carlos", 
    idade: 28, 
    email: "carlos@exemplo.com", 
    cidade: "São Paulo", 
    interesses: ["Música", "Tecnologia", "Fotografia"] 
  },
  { 
    nome: "Beatriz", 
    idade: 22, 
    email: "beatriz@exemplo.com", 
    cidade: "Rio de Janeiro", 
    interesses: ["Viagens", "Leitura", "Cinema"] 
  }
];


// ==============================
// Desafio 1: Destructuring
// ==============================
const { nome, cidade } = usuarios[0]; 
console.log(nome, cidade); // Carlos São Paulo

const { nome: nome1, cidade: cidade1 } = usuarios[1]; 
console.log(nome1, cidade1); // Beatriz Rio de Janeiro


// ==============================
// Desafio 2: Spread operator em array
// ==============================
// const usuariosDoNorte = [...usuarios, { nome: "Ana", cidade: "Manaus" }];
// console.log(usuariosDoNorte);


// ==============================
// Desafio 3: Spread operator em objeto
// ==============================
// const usuario = usuarios[1];
// const beatrizAtualizada = { ...usuario, email: "beatriz.santos@gmail.com" };
// console.log(beatrizAtualizada);


// ==============================
// Desafio 4: Função com destructuring
// ==============================
// function mostrarInteresses({ nome, interesses }) {
//   console.log(`${nome} tem interesse em ${interesses.join(", ")}`);
// }
// usuarios.forEach(u => {
//   mostrarInteresses(u);
// });
