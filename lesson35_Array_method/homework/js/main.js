const out = document.querySelector('.main')
const selectOut = document.querySelector('.sort-goods')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')

const btnSortGoods = document.querySelector('.btn__sort-goods')
const btnSortPrice = document.querySelector('.btn__sort-price')

const goods = [
    {
        img: './img/intel-core-i7-13700kf.jpg',
        brand: 'Intel',
        model: 'Intel Core i7-13700KF',
        cores: 16,
        socket: 'LGA1700',
        integratedGrahic: 'no',
        price: 16199,
    },
    {
        img: './img/intel-core-i7-14700kf.jpg',
        brand: 'Intel',
        model: 'Intel Core i7-14700KF',
        cores: 20,
        socket: 'LGA1700',
        integratedGrahic: 'Intel UHD Graphics 770',
        price: 18999,
    },
    {
        img: './img/intel-core-i7-12700kf.jpg',
        brand: 'Intel',
        model: 'Intel Core i7-12700KF',
        cores: 12,
        socket: 'LGA1700',
        integratedGrahic: 'no',
        price: 13599,
    },
    {
        img: './img/intel-core-i7-13700kf.jpg',
        brand: 'Intel',
        model: 'Intel Core i7-13700KF',
        cores: 16,
        socket: 'LGA1700',
        integratedGrahic: 'Intel UHD Graphics 770',
        price: 18745,
    },
    {
        img: './img/amd-ryzen-9-7900x.jpg',
        brand: 'AMD',
        model: 'Ryzen 9 7900X',
        cores: 12,
        socket: 'AM5',
        integratedGrahic: 'Radeon Graphics',
        price: 16199,
    },
    {
        img: './img/amd-ryzen-5-7600.png',
        brand: 'AMD',
        model: 'Ryzen 5 7600',
        cores: 6,
        socket: 'AM5',
        integratedGrahic: 'Radeon Graphics',
        price: 8319,
    },
    // {
    //     img: './img/samsung-980-v-nand-mlc.png',
    //     type: 'SSD',
    //     brand: 'Samsung',
    //     model: '980',
    //     memory: 1,
    //     memoryType: 'V-NAND MLC',
    //     formFactor: 'M.2 2280',
    //     interface: 'PCle 3.0 x4',
    //     controler: 'Samsung Pablo Controller',
    //     readingSpeed: 3500,
    //     recordingSpeed: 3000,
    //     price: 3299,
    // },
    // {
    //     img: './img/kingston-kc3000.jpg',
    //     type: 'SSD',
    //     brand: 'Kingston',
    //     model: 'KC300',
    //     memory: 1,
    //     memoryType: '3D-NAND TLC',
    //     formFactor: 'M.2 2280',
    //     interface: 'PCle 4.0 x4',
    //     controler: 'PHISON E18',
    //     readingSpeed: 7000,
    //     recordingSpeed: 6000,
    //     price: 4379,
    // },
    // {
    //     img: './img/samsung-980-pro.jpg',
    //     type: 'SSD',
    //     brand: 'Samsung',
    //     model: '980 PRO',
    //     memory: 2,
    //     memoryType: 'V-NAND MLC',
    //     formFactor: 'M.2 2280',
    //     interface: 'PCle 4.0 x4',
    //     controler: 'Samsung Elpis Controller',
    //     readingSpeed: 7000,
    //     recordingSpeed: 5000,
    //     price: 7879,
    // },

]

function renderGoods(data) {
    return `
    <div class="card">
    <img src="${data.img}" alt="${data.brand} ${data.model}" style="width: 300px">
    <h2 class="card__title">${data.brand}</h2>
    <h2 class="card__model">${data.model}</h2>
    <h3 class="card__cores">Cores: ${data.cores}</h3>
    <h3 class="card__socket">Socket: ${data.socket}</h3>
    <h4 class="card__price">Price: ${data.price} UAH</h4>
    </div>`
}

function showAll() {
    goods.map(goods => {
        out.innerHTML += renderGoods(goods)
    })
}

showAll()

goods.map(goods => {
    selectOut.innerHTML += `
    <option value="${goods.brand}">${goods.brand}</option>`
})

function priceSort() {
    out.innerHTML = ""

    let min = parseInt(inp1.value, 10)
    let max = parseInt(inp2.value, 10)

    goods.map(goods => {
        if (min <= goods.price && max >= goods.price) {
            out.innerHTML += renderGoods(goods)
            console.log(goods.price)
        }
    })
}
btnSortGoods.onclick = () => {
    out.innerHTML = ""

    goods.map(goods => {
        if (selectOut.value == goods.brand) {
            out.innerHTML += renderGoods(goods)
        } else if (selectOut.value == "all") {
            out.innerHTML += renderGoods(goods)
        }
    })
}

btnSortPrice.onclick = () => {
    priceSort()
}

