/*
    Exactamente 4 o 6 caracteres.
    Solo caracteres numéricos (0-9).
    Sin espacios en blanco.
*/

function validatePin () {
    let regex = /^(\d{4}|\d{6})$/;
    // ^ inicio del regex
    // (\d{4}|\d{6}) solo numeros de 4 o 6
    // $ fin del regex
    let data = [
        "1234",
        "45135",
        "89abc1",
        "900876",
        " 4983"
    ];

    data.forEach( item => {
        return regex.test(item) ? console.log(`El pin ${ item } esta correcto`) : console.error(`El pin ${ item } no cumple las reglas `);
    });
   
}

validatePin();

