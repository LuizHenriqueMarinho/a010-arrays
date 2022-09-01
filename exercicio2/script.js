// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do 
// tercei00ro array;

// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma 
// informação booleana falsa sobre a **inclusão** de um item ao terceiro array. 
// Isto é, um `includes()` verdadeiro, e outro falso.


let primeiro = [10 , 7 , 9 , 2]
console.log(primeiro.length)
console.log(primeiro[0])
console.log(primeiro.includes("7"))


let segundo = ["palavra" , "comida", "jogos" , "música"]
console.log(segundo.length)
console.log(segundo[1])

let terceiro = [20 , "string" , true]
console.log(terceiro.length)
console.log(terceiro[2])
console.log(terceiro.includes("10"))
