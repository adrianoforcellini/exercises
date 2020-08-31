function porcentagemALetra(P) {



    if (P < 50)
        console.log("Você tirou nota F. F de Foco, Força e Fé. Não desista de sua missão, basta estudar mais pra próxima.");

    else if (P >= 50 && P < 60)
        console.log("Você tirou nota E. E de Estude mais um pouco.");

    else if (P >= 60 && P < 70)
        console.log("Você tirou nota D. D de  ");

    else if (P >= 70 && P < 80)
        console.log("Você tirou nota C");

    else if (P >= 80 && P < 90)
        console.log("Você tirou nota B");

    else if (P >= 90 && P <= 100)
        console.log("Parabéns. Você tirou nota A");

    else
        console.log("Você digitou um percentual invalído. Verifique se o valor está entre 0 e 100(incluindo 0 e 100).")
}