//1
function negativoOuPositivo() {
    let numero = -1;
    if (numero < 0) {
        console.log("O valor número é um Número negativo.");
    } else {
        console.log("O valor número é um Número positivo.");
    }
}
negativoOuPositivo();

//2
function tresValores() {
    let valorA = 2, valorB = 10, valorC = 7;
    if ((valorA + valorC) > valorB) {
        let soma;
        soma = valorA + valorC;
        console.log("valorA:" + valorA + " valorC:" + valorC + " Soma: " + soma)
    } else {
        console.log("valorA:" + valorA + " +" + " valorC:" + valorC + " É menor ou igual a valorB:" + valorB);
    }
}
tresValores();

//3
function horarios() {
    let horario = "noturno";
    switch (horario) {
        case "matutino":
            console.log("Bom Dia!");
            break;
        case "vespertino":
            console.log("Boa Tarde!");
            break;
        case "noturno":
            console.log("Boa Noite!");
            break;
        default:
            console.log("Valor Inválido!");
    }
}
horarios();