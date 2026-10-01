# Que es REST?
Una API rest es la que se encarga de intercambiar informacion entre el servidor y el cliente
aunque el servidor no recuerda nada de lo que le pediste entre una interaccion y otra,
Las interacciones se hacen mediante rutas. El cliente manda una peticion hacia una ruta junto con el
token. 
El servidor ve quien eres y luego viene con esa informacion.

**Ejemplos**
```bash
# este primer url hace una peticion al servidor para que le devuelvas los usuarios
curl -s https://jsonplaceholder.typicode.com/users | head -n 10
# este segundo url esta haciendo una peticion mas especifica al servidor por el usuario "1"
curl -s https://jsonplaceholder.typicode.com/users/1 | head -n 10
# este tercero hace una peticion al servidor por los post del usuario 1
curl -s https://jsonplaceholder.typicode.com/users/1/posts | head -n 10
```