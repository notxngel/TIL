const texto = '{"id": 1, "name": "Leanne Graham"}';
console.log(typeof texto);
// JSON.parse() convierte un string JSON en un objeto JavaScript
const usuario = JSON.parse(texto);
console.log(typeof usuario);
console.log(usuario.name);

console.log(texto.name);

const nuevo = { id: 2, name: "Angel" };
const paraEnviar = JSON.stringify(nuevo);
console.log(typeof paraEnviar);
console.log(paraEnviar);