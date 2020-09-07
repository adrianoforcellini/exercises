function isDividedBy(number, a, b) {
    let n = number;
    let div1 = n % a;
    let div2 = n % b;
    return div1 && div2 === 0;
}