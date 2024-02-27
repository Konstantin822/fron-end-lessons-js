// Сложение " + "
// Вычитание " + "
// Умножение " + "
// Деление " + "
// Остаток от деление " % "

// let num1 = 16 * 1000

// let setNum = prompt("Введите обьем флешки")

// let res = setNum * 1000

// console.log(res / 820)
// console.log(res % 820)


// Task 1
let a = document.querySelector('.inp')
let b = document.querySelector('.inp2')

let btn = document.querySelector('.btn')
let out = document.querySelector('.out')

btn.onclick = () => {
    out.innerHTML = `${a.value * b.value}`
}

// Task 2

let c = document.querySelector('.inp1-2')
let d = document.querySelector('.inp2-2')

let btn2 = document.querySelector('.btn1-2')
let out2 = document.querySelector('.out1-2')

btn2.onclick = () => {
    out2.innerHTML = `${c.value / d.value}`
}