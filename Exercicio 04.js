//Escreva um programa que leia três números  e mostre o maior entre eles.

function maior(valor1,valor2,valor3){
    let aux = 0;
    
    if(valor1>valor2){
        aux=valor1;
    }else if(valor2>valor3){
        aux=valor2;
    }else{
        aux=valor3;
    }
    console.log('O maior valor entre os 3 número é: '+ aux);
    }

maior(10000,20000,25000);