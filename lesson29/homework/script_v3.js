// Площадь
let Pi = Math.PI
let radius = document.querySelector('.inp1')
let btn1 = document.querySelector('.btn1')
let out1 = document.querySelector('.out1')

btn1.onclick = () => {
    out1.innerHTML = `${Pi * Math.pow(radius.value, 2)}`
}

// Скорость
let distance = document.querySelector('.inp2')
let time = document.querySelector('.inp2_02')
let btn2 = document.querySelector('.btn2')
let out2 = document.querySelector('.out2')

btn2.onclick = () => {
    out2.innerHTML = `${distance.value / time.value}`
}

// Грн в доллари
const rate = 38.15
let uah = document.querySelector('.inp3')
let btn3 = document.querySelector('.btn3')
let out3 = document.querySelector('.out3')

btn3.onclick = () => {
    out3.innerHTML = `${uah.value / rate}`
}