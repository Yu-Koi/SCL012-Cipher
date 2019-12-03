# Proyecto Cifrado Cesar

Es este proyecto, construiras una pagina web para permitir al usuario ingresar un mensaje con su respectivo offset, usando la metodologia del cifrado cesar y haciendo referencia al codigo ASCCI y poder cifrarlo o descifrarlo segun las necesidades del usuario, para poder comunicarse en codigo con otros usuarios.

Como resultado tendras una pagina una web que permitira a los usuarios ingresar un numero de offset para asi poder cifrar y descifrar mensajes a su vez visualizar el resultado para ambos caso.


![codigo Ascii](https://concepto.de/wp-content/uploads/2018/04/Codigo-ASCII-min-e1523384955302.jpg)


## Estructura del proyecto

La estructura del proyecto esta basada en javascript y en funciones aplicando la metodologia del cifrado cesar.


#####Los archivos se componen de:

index.html: en este esta contenido el markup(html), el CSS y el Javascript.

cipher.js: Este objeto cipher contiene dos metodos, el cipher.encode y el cipher.decode.

index.js: contiene eventos del Dom para invocar cipher.encode() o cipher.decode() segun sea necesario y para actualizar el resultado en la UI.

test: donde le realizaremos pruebas unitarias al cipher.spec.js para asegurar el buen funcionamiento.

## Contenido y Caracteristicas
ºRegistro de usuarios

ºPermitir añadir un mensaje para cifrarlo, mostrar el resultado cifrado, permitir añadir un mensaje para descifrarlo y mostrar el resultado descifrado.

## License
[MIT](https://choosealicense.com/licenses/mit/)