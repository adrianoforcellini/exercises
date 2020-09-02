function indiceDoElementoMenorValor(array) {
    let indiceMenor = 0;
    for (let indice in array) {
        if (array[indiceMenor] > array[indice]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}