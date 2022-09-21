//Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível 
//(codificado da seguinte forma: A-álcool, Gasolina), calcule e imprima o valor a 
//ser pago pelo cliente sabendo-se que o preço do litro da 
//gasolina é R$ 2,70 e o preço do litro do álcool é R$ 1,90

function calcularcombustivel(combustivel,qtdelitro){

    switch(combustivel){ 
    case "Alcool":     
        var total = qtdelitro*1.90;
        console.log('O valor do abastecimento a alcool é: ' + total);
    break;

    case "Gasolina":     
        var total = qtdelitro*2.70;
        console.log('O valor do abastecimento a gasolina é: ' + total);
    break;
    
    default:   
    console.log('Selecione um combustível com as opções "Alcool" ou "Gasolina" ')
    }
    }
    
    
    calcularcombustivel("Gasolina",26);