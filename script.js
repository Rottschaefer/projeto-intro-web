let titulos = [
    {
        nome: "TESOURO PREFIXADO",
        ano: 2026,
        rentabilidade: 12.63,
        minimo: 35.12,
        vencimento: "01/01/2026"
    }
    ,
    {
        nome: "TESOURO IPCA+",
        ano: 2029,
        rentabilidade: 6.13, /*fora o IPCA*/
        minimo: 55.07,
        vencimento: "15/05/2029"
    }
    ,
    {
        nome: "TESOURO SELIC",
        ano: 2026,
        rentabilidade: 0.0968,/*fora a SELIC*/
        minimo: 126.42,
        vencimento: "01/01/2026"
    }
]

const arrayIndices = ["prefixado", "ipca", "selic"]

// const ids = ["cardprefixado","cardipca","cardselic"]

const ids = ["valoresprefixado", "valoresipca", "valoresselic"]

// Colocar um for para fazer essa criação dos objetos no HTML depois

let j = 0
for (let i = 0; i < 3; i++) {

    document.getElementById(ids[i]).children[0].innerHTML += `${titulos[i].rentabilidade}%`

    document.getElementById(ids[i]).children[1].innerHTML += ` R$ ${titulos[i].minimo}`

    document.getElementById(ids[i]).children[2].innerHTML += ` ${titulos[i].vencimento}`

}

const idsAno = ["anoprefixado", "anoipca", "anoselic"]


for (let i = 0; i < 3; i++) {
    document.querySelector(`#${idsAno[i]}`).innerHTML = `${titulos[i].ano}`
}







console.log(document.querySelectorAll(".cardtitulo")[0].innerHTML.toLowerCase())


const buscar = () => {
    for (let i = 0; i < document.getElementsByClassName("cardtitulo").length; i++) {
        console.log("tamo aq")
        if (!document.querySelectorAll(".cardtitulo")[i].innerHTML.toLowerCase().includes(document.getElementById('search').value) && !document.querySelectorAll(".cardtitulo")[i].innerHTML.includes(document.getElementById('search').value)) {
            document.querySelectorAll(".card")[i].classList.add("hide")
        }
        else if (document.querySelectorAll(".cardtitulo")[i].innerHTML.includes(document.getElementById('search').value)) {
            document.querySelectorAll(".card")[i].classList.remove("hide")
        }

    }
}

console.log(titulos)











