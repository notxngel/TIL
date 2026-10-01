const texto = '{"id": 1, "name": "Leanne Graham"}';
console.log(typeof texto);

const usuario = JSON.parse(texto);
console.log(typeof usuario);
console.log(usuario.name);

console.log(texto.name);