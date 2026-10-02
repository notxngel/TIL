# Que es un formato JSON?
JSON es un formato basado en javascript en el cual el cliente y el servidor se comunican mediante una API, el formato JSON siempre viaja como texto, entre comillas, llaves y corchetes. el objeto JSON tiene dos metodos; "parse" convierten formato texto JSON a objeto de javascript y "stringify" convierte de objeto de javascript a texto JSON

**ejemplos**
```bash
# Metodo JSON.parde()
const texto = '{"id": 1, "name": "Leanne Graham"}';
console.log(typeof texto);
#JON.parse() convierte un string JSON en un objeto JavaScript
const usuario = JSON.parse(texto);
console.log(typeof usuario);
console.log(usuario.name);
console.log(texto.name);

#Metodo JSON.stringify()
const nuevo = { id: 2, name: "Angel" };
#convierte este objeto javascript a string JSON
const paraEnviar = JSON.stringify(nuevo);
console.log(typeof paraEnviar);
console.log(paraEnviar);
```

