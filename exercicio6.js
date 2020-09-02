function ehPalindromo(palavra) {
    let palindromo = palavra;
    let aocontrario = palavra.split('').reverse().join('');
    return palavra === aocontrario;
}