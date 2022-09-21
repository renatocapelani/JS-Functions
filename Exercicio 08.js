//Escreva um programa que calcula o desconto previdenciário de um funcionário. 
//Dado um salário, o programa deve retornar o valor do desconto proporcional ao mesmo. 
//O cálculo segue a regra: o desconto é de 11% do valor do salário, entretanto, 
//o valor máximo de desconto é 334,29, o que for menor.

function descontoprev(salario){
let desconto = 0;
if ((salario*0.11) > 334.29){
    desconto = 334.29;
}else{
    desconto = (salario * 0.11);
   
}
console.log('O desconto é de: R$' + desconto);
}

descontoprev(3500);