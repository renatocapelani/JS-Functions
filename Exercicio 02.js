//Escreva um programa que leia um número e exiba o seu módulo (sempre positivo).

function modulopositivo(valor){
    if (valor<0){
        console.log('O valor negativo passou a ser positivo: ' + -(valor))
    }else{
        console.log('O valor positivo é: ' + valor);
    }
}

modulopositivo(15);