const out = document.querySelector('.main')
const selectOut = document.querySelector('.sort-brand')

const btnSortBrand = document.querySelector('.btn__sort-brand')

const cars = [
    {
        img: './img/volkswagen.jpg',
        brand: 'Volkswagen',
        model: 'Touran',
        age: 2003,
        price: 4700,
        lenght: 267,
    },
    {
        img: './img/volkswagen.jpg',
        brand: 'Volkswagen',
        model: 'Passat',
        age: 2019,
        price: 12700,
        lenght: 106,
    },
    {
        img: './img/volkswagen.jpg',
        brand: 'Mersedes',
        model: 'E',
        age: 2013,
        price: 22700,
        lenght: 267,
    },
    {
        img: './img/volkswagen.jpg',
        brand: 'Mersedes',
        model: 'S',
        age: 2015,
        price: 33700,
        lenght: 67,
    },
    {
        img: './img/volkswagen.jpg',
        brand: 'Mazda',
        model: '6',
        age: 2010,
        price: 11700,
        lenght: 190,
    },
    {
        img: './img/volkswagen.jpg',
        brand: 'Mazda',
        model: '3',
        age: 2006,
        price: 3700,
        lenght: 230,
    },
]

// console.log(cars[cars.length - 1]) // Последний элемент массива

// Старый метод
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }

// Map: перебор массива который возвращает его

// cars.map((item, index, array) => {})

// cars.map((item, index, array) => {
//     console.log(index) // Индекс
//     console.log(item) // Элемент
//     console.log(array) // Массив
// })

// cars.map(car => console.log(car))

// cars.map(car => {
//     console.log(car.brand)
// })

// cars.map(car => {
//     if (car.brand == 'Volkswagen') {
//         console.log(car.brand)
//     }
// })

function renderCars(data) {
    return `
    <div class="card">
    <img src="${data.img}" alt="${data.brand} ${data.model}">
    <h2 class="card__title">${data.brand} ${data.model} ${data.age}</h2>
    <h5 class="card__price">${data.price}$ <span class="card__length">${data.lenght} тыс. км</span></h5>
    </div>`
}

function showAll() {
    cars.map(car => {
        out.innerHTML += renderCars(car)
    })
}

showAll()

// cars.map(car => {
//     out.innerHTML += renderCars(car)
//})

cars.map(car => {
    selectOut.innerHTML += `
    <option value="${car.brand}">${car.brand}</option>`
})

btnSortBrand.onclick = () => {
    out.innerHTML = ""

    cars.map(car => {
        if (selectOut.value == car.brand) {
            out.innerHTML += renderCars(car)
        } else if (selectOut.value == "all") {
            out.innerHTML += renderCars(car)
        }
    })
}