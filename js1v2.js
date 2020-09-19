//inserir id=id para a tag p ;
mudaTagp = document.getElementById("id")

//poderia também inserir uma class=class
mudaTagp1 = document.getElementsByClassName("class")


//sem mudar nada, poderia usar estas 3 formas(existem inúmeras outras usando parents.node)
mudaTagp2 = document.getElementsByTagName("p")[0]

mudaTagp3 = document.querySelector("p")

mudaTagp4 = document.querySelectorAll("p")[0]

//e se eu quisesse acessar o proximo p por um metodo que nos retorna a primeira p como mudaTagp3?
mudaTagp3.nextElementSibling

//e a proxima?

mudaTagp3.nextElementSibling.nextElementSibling

//agora acessado o elemento desejado, basta criar a função
function mudaTexto() {
    //  mudaTagp, 1, 2, 3 ou 4.innerText = "novo texto"
    mudaTagp.innerText = "novo texto"
    mudaTagp2.innerText = "novo texto"
}