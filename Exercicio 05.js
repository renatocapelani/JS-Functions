//Escreva um programa que leia o número equivalente ao mês e imprima a quantidade de dias deste mês.

function diasNoMes(mes, ano) {
    var data = new Date(ano, mes, 0);
    return data.getDate();
}

console.log('O mês informado contém ' + diasNoMes(2, 2022) + ' dias.');