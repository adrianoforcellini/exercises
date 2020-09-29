let clickCount = 0;
document.getElementById('bt').addEventListener('click', () => {
    clickCount += 1;
    document.getElementById('p').innerText = clickCount;
    document.getElementById('bt').innerText = "Clique De Novo!!!"

    if (clickCount > 10) {
        document.getElementById('bt').innerText = "Já tá baun né?"
    }
    if (clickCount > 20) {
        document.getElementById('bt').innerText = "Mano, ta perdendo a graça."
    }
    if (clickCount > 35) {
        document.getElementById('bt').innerText = "Tá, já chega."
        document.getElementById('p').innerText = "0";
    }

    if (clickCount > 50) {
        document.getElementById('bt').innerText = `Beleza, vamo continuar!!!
        ...Parabéns, vc mereceu!!!`
        document.getElementById('p').innerText = clickCount;

    }
});