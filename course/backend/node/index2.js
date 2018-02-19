let [node, path, a, b] = process.argv

a = parseFloat(a)
b = parseFloat(b)

let res = (a + b)

console.log(res)

//SOLUCION OFICIAL

// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)



//CALCULADORA DE MANU

// let [node, path, oper, a, b] = process.argv

// a = parseFloat(a)
// b = parseFloat(b)

// let res

// switch (oper){
//     case 'sum':
//         res = a + b
//         break
//     case 'mult':
//         res = a * b
//         break
//     case 'div':
//         res = a/ b
//         break
// }

// console.log (res)

