//09 - Um posto está vendendo combustíveis com a seguinte tabela de descontos: 
//Álcool: Até 25l, desconto de 2% por litro. Acima de 25l, desconto de 4% por litro 
//Gasolina: Até 25l, desconto de 3% por litro. Acima de 25l, desconto de 5% por litro.

function calcularcombustivel(combustivel,qtdelitro,valorlitro){

switch(combustivel){ 
case "Alcool":
    if(qtdelitro<=25){
        let total = qtdelitro*(valorlitro*0.98);
        console.log('O valor do abastecimento a alcool é: ' + total);
    }else if(qtdelitro>25){
        let total = qtdelitro*(valorlitro*0.96);
        console.log('O valor do abastecimento a alcool é: ' + total);
    }
        
break;
case "Gasolina":
    if(qtdelitro<=25){
        let total = qtdelitro*(valorlitro*0.97);
        console.log('O valor do abastecimento a gasolina é: ' + total);
    }else if(qtdelitro>25){
        let total = qtdelitro*(valorlitro*0.95);
        console.log('O valor do abastecimento a gasolina é: ' + total);
    }
        
break;

default:   
console.log('Selecione um combustível com as opções "Alcool" ou "Gasolina" ')
}
}


calcularcombustivel("Alcool",26,2);