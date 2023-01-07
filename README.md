# Función para comprobar que una cadena es válida como pin

## Instrucciones
* Exactamente 4 o 6 caracteres.
* Solo caracteres numéricos (0-9).
* Sin espacios en blanco.

## Datos de ejemplo
* "1234"
* "45135"
* "89abc1"
* "900876"
* " 4983"


```js
    let regex = /^(\d{4}|\d{6})$/;
```
