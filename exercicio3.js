for (let a = 0; a < n; a += 1) {
    let linha = "";
    for (let b = n - 1; b > a; b -= 1) {
        linha += " ";
    }
    for (let c = 0; c <= a; c += 1) {
        linha += "*";
    }
    console.log(linha)

}