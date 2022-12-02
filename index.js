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

let arr = []

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
let comida = `comida${i}`

for(let i in comida){
    console.log(comida)
if(i == temLactose){
    arr.push((comida+i))
}
else{alert(`${comida} não foi adicionado`)}}

// Cálculo da média e verificação de se todos os valores booleanos são true


// const media = (custoIngrediente1+custoIngrediente2+custoIngrediente3)/3
// const verificaBoolean = temLactose1 && temLactose2 && temLactose3

// // Impressão de tudo

// console.log(media)
// console.log(verificaBoolean)


// console.log(nome1.toUpperCase(),"\nCusto:", custoIngrediente1, "\nTem Lactose", temLactose1,"\nIngredientes:", ingredientes1)
// console.log(nome2.toUpperCase(),"\nCusto:", custoIngrediente2, "\nTem Lactose", temLactose2,"\nIngredientes:", ingredientes2)
// console.log(nome3.toUpperCase(),"\nCusto:", custoIngrediente3, "\nTem Lactose", temLactose3,"\nIngredientes:", ingredientes3)