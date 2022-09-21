//Escreva um programa que leia 3 valores e escreva a soma dos 2 maiores.

function somarmaiores(valor1,valor2,valor3){
    let menor = 0;
    
    if(valor1<valor2){
        menor=valor1;
    }else if(valor2<valor3){
        menor=valor2;
    }else{
        menor=valor3;
    }
    let total = (valor1+valor2+valor3)-menor;
    console.log('A soma dos 2 valores maiores é: '+ total);
    }

    somarmaiores(100000,30000,20000);