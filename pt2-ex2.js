function repeteMais(array) {
    let indiceMaior = 0;
    for (let indice in array) {
        if (numeros[indiceMaior] < array[indice]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;

}