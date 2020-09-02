function indeceDoElementoMaiorValor(array) {
    let indiceMaior = 0;
    for (let indice in array) {
        if (array[indiceMaior] < array[indice]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;

}