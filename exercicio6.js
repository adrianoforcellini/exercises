function qualMovimento(a) {
    if (a == "bispo" || a == "Bispo" || a == "Bishop" || a == "bishop")
        console.log("Os bispos são peças incrivelmente interessantes. São as únicas peças do jogo que ficam presas numa única cor. Por isso o par de bispos pode e deve, na maioria das vezes, ser preservado. Seu movimento é de quantas casas desejar nas diagonais que se conectam á sua casae em qualquer direção.");

    else if (a == "Peão" || a == "peão" || a == "pawn" || a == "Pawn")
        console.log("O peão pode em seu primeiro movimento pode andar duas casas para a frente. Só no primeiro movimento. Posteriormente, ele anda uma casa por vês. Para 'comer' outra peça, o movimento é em sua diagonal, mas só pra frente, nunca pra trás. Fato curioso, pois o peão é a única peça que come outra diferentemente de seus movimentos de locomoção. E há ainda uma regra bem diferenciada chamada 'en passant', ela consiste na ideia de capturar o peão que tentar fugir ao combate.Calma, eu explico; Se um peão estiver por exemplo em d2, sua casa inicial, e houver peão adversario ou em e4 ou em f4, o peão em d2 poderia 'se negar ao combate' uzando seu direito de andar duas casas de uma vez, parando em d4. Mas caso o faça, os peões das casas adjacentes podem caputar este peão sem tocar-lo, parando na casa d3. Daí 'en passant', ou seja, 'de passagem', sem encostar.
            ");

            else if (a == "Cavalo" || a == "cavalo" || a == "Horse" || a == "horse")
                console.log("O cavalo é talvez a peça de movimento mais peculiar do jogo. A única capaz de se locomover num ambiente fechado. Isso porque ele é capaz de pular as outras peças. Seu movimento é em formato de 'L', ou seja, ele anda uma casa pro lado e depois 3 'pra frente', ou ainda 3 pro lado, e uma 'pra frente', isso em qualquer direção. Sendo assim um cavalo que não estiver no canto pode cobrir até 8 casas. E além disso, a cada movimento ele irá intercalar se está em casa pretas ou brancas, o que também torna tudo bem interessante.");

            else if (a == "rei" || a == "Rei" || a == "king" || a == "King")
                console.log("O rei caminha com sabedoria. Um passo de cada vez, e na direção e sentido que melhor lhe aprouver.");

            else if (a == "Queen" || a == "queen" || a == "rainha" || a == "Rainha")
                console.log("A rainha é sem dmais poderosa peça de ataque, e talvez de defesa também. Ela é capaz de andar quantas casas desejar em qualquer direção que desejar. Seu  KI é de 3 milhões.");

            else if (a == "torre" || a == "Torre" || a == "Rock" || a == "rock")
                console.log("As torres são peças incrivelmente úteis e poderosas. Isso porque seu movimento, que é vertical ou horizontal em qualquer direção possibilita facilmente aprisionar o rei adversário e proteger o próprio.");

            else
                console.log("Essa não é peça de xadrez não meu(a) querido(a)")

        }