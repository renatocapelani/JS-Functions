//Faça um algoritmo para ordenar o seguinte vetor: var a = [67, 58, 33, 29, 12, 90, 5, 1, 100, 6, 10, 18]

var a = [67, 58, 33, 29, 12, 90, 5, 1, 100, 6, 10, 18];

function ordenar () {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i +1]) {
            var v1 = a[i]
            var v2 = a[i +1] 
            a[i] = v2
            a[i +1] = v1
        }
    }
}

for (let j = 0; j < a.length ; j++) {
    ordenar();
}

console.log(a)