let estados = {
    AC: "Acre",
    AL: "Alagoas",
    AP: "Amapá",
    AM: "Amazonas",
    BA: "Bahia",
    CE: "Ceará",
    DF: "Distrito Federal",
    ES: "Espírito Santo",
    GO: "Goiás",
    MA: "Maranhão",
    MT: "Mato Grosso",
    MS: "Mato Grosso do Sul",
    MG: "Minas Gerais",
    PA: "Pará",
    PB: "Paraíba",
    PR: "Paraná",
    PE: "Pernambuco",
    PI: "Piauí",
    RJ: "Rio de Janeiro",
    RN: "Rio Grande do Norte",
    RS: "Rio Grande do Sul",
    RO: "Rondônia",
    RR: "Roraima",
    SC: "Santa Catarina",
    SP: "São Paulo",
    SE: "Sergipe",
    TO: "Tocantins",
};

//valeu Gus!!!

function selecionaEstado(key, value) {
    let estado = document.querySelector("#estado");
    let selecao = document.createElement("option");
    estado.appendChild(selecao);
    selecao.value = key;
    selecao.innerHTML = value;
}

for (let key in estados) {
    selecionaEstado(key, estados[key]);
}

//adaptado a partir de : http://devfuria.com.br/javascript/manipulando-combobox-select-com-javascript/