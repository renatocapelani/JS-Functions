//Escreva um programa que leia 3 números e calcule a média ponderada entre eles. 
//Considere que o maior número recebe peso 5 e os outros dois recebem peso 2,5.


function mediaponderada(Nota1,Nota2,Nota3){

let notamaior = Math.max(Nota1,Nota2,Nota3);

if(Nota1 == notamaior){
    console.log('A Nota1 teve o peso de 5 pontos');
}else{
    console.log('A Nota1 teve o peso de 2.5 pontos');
}

if(Nota2 == notamaior){
    console.log('A Nota2 teve o peso de 5 pontos');
}else{
    console.log('A Nota2 teve o peso de 2.5 pontos');
}

if(Nota3 == notamaior){
    console.log('A Nota3 teve o peso de 5 pontos');
}else{
    console.log('A Nota3 teve o peso de 2.5 pontos');
}

}

mediaponderada(30,20,10);