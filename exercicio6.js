function ehPalindromo(palavra) {
    let aocontrario = palavra.split('').reverse().join(''); //str-> array -> array^(-1) -> str^(-1)
    return palavra === aocontrario; // retorna true se str = str^(-1)
}