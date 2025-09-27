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

// Desafio 1
const { nome, cidade } = usuarios[0];
console.log(nome, cidade);

// Desafio 2
const usuariosDoNorte = [...usuarios, { nome: "Ana", cidade: "Manaus" }];
console.log(usuariosDoNorte);

// Desafio 3
const usuario = usuarios[1];
const beatrizAtualizada = { ...usuario, email: "bia.santos@yduqs.com" };
console.log(beatrizAtualizada);

// Desafio 4
function mostrarInteresses({ nome, interesses }) {
  console.log(`${nome} tem interesse em ${interesses.join(", ")}`);
}
usuarios.forEach(u => {
  mostrarInteresses(u);
});
