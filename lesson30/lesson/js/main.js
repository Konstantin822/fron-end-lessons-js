let num = 99
let str = "Name"
let bool = true

let nu = null // Когда ничего нет вообще
let und = undefined // Когда есть переменная но там ничего нет
// let a

// = :Присвоение
// == :Сравнение
// === :Сравнение по типу данных

// a > b :Больше
// a < b :Меньше

console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(18 < 22))

console.log(Boolean(5 === '5'))

console.log(43 + " " + typeof "43")
console.log(43 + " " + typeof 43)

console.log(str.toLocaleLowerCase())
console.log(str.includes("Na"))


let obj = {
    img: '/iphone.png',
    name: "iphone",
    price: 1300,
    model: '15 pro max'
}

let arr = [1, 23, 4, 5]

console.log(typeof arr)

try {
    console.log("Name test try")
} catch (err) {
    console.log(err)
}