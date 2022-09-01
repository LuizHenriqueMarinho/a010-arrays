// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

let primeiro = [10 , 7 , 9 , 2]

let segundo = ["palavra" , "comida", "jogos" , "música"]

let terceiro = [20 , "string" , true]

let primeiroCopia = primeiro.slice()

let segundoCopia = segundo.slice()

let terceiroCopia = terceiro.slice()

primeiroCopia.push(Number(5))
console.log(primeiro)
console.log(primeiroCopia)

segundoCopia.pop()
console.log(segundo)
console.log(segundoCopia)

terceiroCopia.splice(1,1)
console.log(terceiro)
console.log(terceiroCopia)


