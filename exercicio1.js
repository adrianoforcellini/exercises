function imprimaQuadrado(n) {
    let linha = "";

    for (let a = 0; a <= n; a++) {
        if (linha.length == n)
            for (let b = 0; b <= n; b++) {
                console.log(linha);
            }

        else
            linha += "*";


    }
}