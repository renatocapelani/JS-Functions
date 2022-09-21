//Escreva um programa que leia um número e imprima se este número é ou não par.

function par(valor){
    if(valor % 2 == 0){
        console.log('O número '+ valor + ' é par');
    }else{
        console.log('O número '+ valor + ' não é par');
    }
}

par(4);