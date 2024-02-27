// Min
// Task 1
console.log(Math.floor(0.1 + 0.2))

// Task 2
let a = "1"
let b = 2
console.log(Math.floor(a + b))

// Task 3
const size = 820
let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let out = document.querySelector('.out')

btn.onclick = () => {
    out.innerHTML = `${Math.floor(inp.value / size)}`
}

// Min END

// Middle 
// Task 1
let inp2 = document.querySelector('.inp2')
let inp3 = document.querySelector('.inp3')
let btn2 = document.querySelector('.btn2')
let out2 = document.querySelector('.out2')
let out3 = document.querySelector('.out3')

btn2.onclick = () => {
    out2.innerHTML = `${Math.floor(inp2.value / inp3.value)}`
    out3.innerHTML = `${inp2.value % inp3.value}`
}

// Task 2
let inp4 = document.querySelector('.inp4')
let btn3 = document.querySelector('.btn3')
let out4 = document.querySelector('.out4')

btn3.onclick = () => {
    function getReverse(inp4) {
        let res = 0;
        while (inp4) {
            res = res * 10 + inp4 % 10;
            inp4 = Math.floor(inp4 / 10)
        }
        return res;
    }
    out4.innerHTML = `${getReverse(inp4.value)}`
}
// Middle END

// Max
// Task 1
const time = 60
const percent = 5
let inp5 = document.querySelector('.inp5')
let btn4 = document.querySelector('.btn4')
let out5 = document.querySelector('.out5')

btn4.onclick = () => {
    out5.innerHTML = `${inp5.value / 100 * percent / 365 * time}`
}

// Task 2
console.log(2 && 0 && 3)
console.log(2 || 0 || 3)
console.log(2 && 0 || 3)