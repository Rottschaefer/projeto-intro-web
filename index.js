// 3 objeto(ainda não tivemos essa aula) e caracteríticas a seguir:

const comida1 = {
    nome: "Strogonoff",

    custoIngrediente: 50,

    temLactose: true,

    ingredientes: ["Creme de Leite","Frango","Batata Palha"]
}
const comida2 = {
    nome: "Bolo de chocolate",
    custoIngrediente: 15,
    temLactose: true,
    ingredientes: ["Leite","Ovos","Chocolate"]
}
const comida3 = {
    nome: "Bolo de banana",
    custoIngrediente: 20,
    temLactose: false,
    ingredientes: ["Banana","açúcar","farinha"]
}

let arr = [comida1,comida2,comida3]

// função que imprime o relatório
 
function relatorio(objeto){
for (const i in objeto) {
   console.log(`${i}:${objeto[i]}`)
}
return ("----------------------") 
}

// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

function nomeIgualString(arrayObjetos,string){
    let newArray = arrayObjetos.filter((elemento)=>elemento.nome===string).slice()

    if(newArray.length === 0){
        alert("Nenhum item foi encontrado")
    }
    
    return newArray
}








// console.log(nome1.toUpperCase(),"\nCusto:", custoIngrediente1, "\nTem Lactose", temLactose1,"\nIngredientes:", ingredientes1)
// console.log(nome2.toUpperCase(),"\nCusto:", custoIngrediente2, "\nTem Lactose", temLactose2,"\nIngredientes:", ingredientes2)
// console.log(nome3.toUpperCase(),"\nCusto:", custoIngrediente3, "\nTem Lactose", temLactose3,"\nIngredientes:", ingredientes3)



// if(comida1.temLactose){
//     arr.push(comida1)
// }
// else{alert("Comida1 não foi adicionado")}

// if(comida2.temLactose){
//     arr.push(comida2)
// }
// else{alert("Comida1 não foi adicionado")}

// if(comida3.temLactose){
//     arr.push(comida3)
// }
// else{alert("Comida3 não foi adicionado")}


// console.log(arr)


//Tentativa de fazer o processo com for 
// let comida = `comida${i}`

// for(let i in comida){
//     console.log(comida)
// if(i == temLactose){
//     arr.push((comida+j))
// }
// else{alert(`${comida} não foi adicionado`)}}

// Cálculo da média e verificação de se todos os valores booleanos são true


// const media = (custoIngrediente1+custoIngrediente2+custoIngrediente3)/3
// const verificaBoolean = temLactose1 && temLactose2 && temLactose3

// // Impressão de tudo

// console.log(media)
// console.log(verificaBoolean)


// console.log(nome1.toUpperCase(),"\nCusto:", custoIngrediente1, "\nTem Lactose", temLactose1,"\nIngredientes:", ingredientes1)
// console.log(nome2.toUpperCase(),"\nCusto:", custoIngrediente2, "\nTem Lactose", temLactose2,"\nIngredientes:", ingredientes2)
// console.log(nome3.toUpperCase(),"\nCusto:", custoIngrediente3, "\nTem Lactose", temLactose3,"\nIngredientes:", ingredientes3)

// Semana 3
// for (const comida of arr) {
    //     let texto = ""
    //     for (const ingrediente of comida.ingredientes) {
    //         texto += ingrediente + ", "
    //         comida.ingredientes = texto 
    //         }
    // }