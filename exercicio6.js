function ehPalindromo(palavra) {
    let aocontrario = palavra.split('').reverse().join('');
    return palavra === aocontrario;
}