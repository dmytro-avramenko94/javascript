
const out = document.querySelector('.main')
const selectOut = document.querySelector('.sort-brand')

const btnSortBrand = document.querySelector('.btn__sort-brand')
const btnShowAll = document.querySelector('.btn__show')

const cars = [
    {
        img: './img/volkswagen_touran__532919184hd.webp',
        brand: 'Volkswagen',
        model: 'Touran',
        age: 2003,
        price: 4700,
        length: 267,
    },
    {
        img: './img/vw-pas.webp',
        brand: 'Volkswagen',
        model: 'Passat',
        age: 2019,
        price: 12000,
        length: 106,
    },
    {
        img: './img/e220.jpg',
        brand: 'Mersedes',
        model: 'E220',
        age: 2013,
        price: 22000,
        length: 267,
    },
    {
        img: './img/s550.jpg',
        brand: 'Mersedes',
        model: 'S550',
        age: 2015,
        price: 33000,
        length: 67,
    },
    {
        img: './img/mazda-6.webp',
        brand: 'Mazda',
        model: '6',
        age: 2010,
        price: 12000,
        length: 190,
    },
    {
        img: './img/mazda-3.jpg',
        brand: 'Mazda',
        model: '3',
        age: 2006,
        price: 5000,
        length: 300,
    },
]

// Array method "map" - perebor masyvu, jakyj powertaje masyv

// cars.map( (item, index, arry) => {} )

// cars.map((item, index, arry) => {
//     console.log(item); //element
//     console.log(index); //index
//     console.log(arry); //array
// })

//cars.map(car => console.log(car))


function renderCars(data) {
    return `<div class="card">
    <img src="${data.img}" alt="${data.brand} ${data.model}" width="450">
    <h2 class="card__title">${data.brand} ${data.model} ${data.age}</h2>
    <h5 class="card__price">${data.price}$ <span class="card__rage">${data.length} тис.км</span></h5>
</div>
`
}

function showAll() {
    out.innerHTML = ""
    cars.map(car => {
        out.innerHTML += renderCars(car)
    })
}

let addedBrands = {}

cars.map(car => {
    if (!addedBrands[car.brand]) {
        selectOut.innerHTML += `
    <option value="${car.brand}"> ${car.brand} </option>
    `}
    addedBrands[car.brand] = true;
})

btnSortBrand.onclick = () => {
    out.innerHTML = ""

    cars.map(car => {
        if (selectOut.value == car.brand) {
            out.innerHTML += renderCars(car)
        } else if (selectOut.value == 'all') {
            out.innerHTML += renderCars(car)
        }

    })

}

btnShowAll.onclick = showAll

showAll()
