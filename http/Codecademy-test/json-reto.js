/*markdown
Crea una variable llamada jsObject que sea un objeto analizado desde jsonData.

Imprime la matriz de todas las children propiedades anidadas en jsObject. 
Asegúrate de usar la notación de corchetes o la notación de punto para acceder a las propiedades anidadas.
*/

//Uso de JSON.parse() para convertir la cadena JSON en un objeto JavaScript

const jsonDataParse = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';

const jsObjectPParse = JSON.parse(jsonDataParse);

console.log(jsObject.parent.children);

/* Como desarrollador, recibes algunos datos en forma de cadena JSON en la variable jsonData. Sin embargo, el contenido de jsonDatano es del todo correcto. El agevalor de la propiedad principal debería ser 35en lugar de 45. Sin modificar directamente el contenido de jsonData, actualiza el agevalor y luego registra una nueva cadena JSON con el valor correcto en la consola.

Aquí tienes una guía paso a paso para resolver este desafío:

Conviértelo jsonDataen un objeto JavaScript usando JSON.parse()y guarda el resultado en una variable llamada jsObject.

Utilice la notación de punto, .key, o de corchete, ['key'], para acceder a la parentpropiedad de jsObject, seguida de la agepropiedad, y cambie su valor de 45a 35.

Conviértelo jsObjectde nuevo a una cadena JSON JSON.stringify()y guárdalo como otra variable jsObjectToJson.

Registra la jsObjectToJsoncadena en la consola. */

//Uso de JSON.stringify() para convertir un objeto JavaScript en una cadena JSON
const jsonDataStringify = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

const jsObject = JSON.parse(jsonData);
jsObject.parent.age = 35;

const jsObjectToJson = JSON.stringify(jsObject);

console.log(jsObjectToJson);

