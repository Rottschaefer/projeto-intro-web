// 3 objeto(ainda não tivemos essa aula) e caracteríticas a seguir:

const nome1 = "Strogonoff";

const custoIngrediente1 = 50;

const temLactose1 = true;

const ingredientes1 = ["Creme de Leite","Frango","Batata Palha"]



const nome2 = "Bolo de chocolate";

const custoIngrediente2 = 15;

const temLactose2 = true;

const ingredientes2 = ["Leite","Ovos","Chocolate"]



const nome3 = "Bolo de banana";

const custoIngrediente3 = 20;

const temLactose3 = false;

const ingredientes3 = ["Banana","açúcar","farinha"]


// Cálculo da média e verificação de se todos os valores booleanos são true


const media = (custoIngrediente1+custoIngrediente2+custoIngrediente3)/3
const verificaBoolean = temLactose1 && temLactose2 && temLactose3

// Impressão de tudo

console.log(media)
console.log(verificaBoolean)


console.log(nome1.toUpperCase(),"\nCusto:", custoIngrediente1, "\nTem Lactose", temLactose1,"\nIngredientes:", ingredientes1)
console.log(nome2.toUpperCase(),"\nCusto:", custoIngrediente2, "\nTem Lactose", temLactose2,"\nIngredientes:", ingredientes2)
console.log(nome3.toUpperCase(),"\nCusto:", custoIngrediente3, "\nTem Lactose", temLactose3,"\nIngredientes:", ingredientes3)