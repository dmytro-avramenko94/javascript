
const cars = [
    {
        img: './img/120i.jpg',
        series: 'Series 1',
        model: '120d',
        fuel: 'diesel',
        price: 30000,
    },
    {
        img: './img/m135.webp',
        series: 'Series 1',
        model: 'M135i',
        fuel: 'petrol',
        price: 50000,
    },
    {
        img: './img/230i.avif',
        series: 'Series 2',
        model: '230i',
        fuel: 'petrol',
        price: 40000,
    },
    {
        img: './img/2-active-tourer.jpg',
        series: 'Series 2',
        model: 'Active Tourer',
        fuel: 'diesel',
        price: 35000,
    },
    {
        img: './img/m240i.jpg',
        series: 'Series 2',
        model: 'M240i',
        fuel: 'petrol',
        price: 74000,
    },
    {
        img: './img/320i',
        series: 'Series 3',
        model: '320i',
        fuel: 'petrol',
        price: 44000,
    },
    {
        img: './img/320i-touring.jpg',
        series: 'Series 3',
        model: '320d Touring',
        fuel: 'diesel',
        price: 47000,
    },
    {
        img: './img/m340i.webp',
        series: 'Series 3',
        model: 'M340i',
        fuel: 'petrol',
        price: 83000,
    },
    {
        img: './img/420i-coupe',
        series: 'Series 4',
        model: '420i Coupe',
        fuel: 'petrol',
        price: 50000,
    },
    {
        img: './img/430i-grand-coupe.webp',
        series: 'Series 4',
        model: '430d Coupe',
        fuel: 'diesel',
        price: 58000,
    },
    {
        img: './img/m4-csl.avif',
        series: 'Series 4',
        model: 'M4 CSL',
        fuel: 'petrol',
        price: 100000,
    },
    {
        img: './img/530i.jpg',
        series: 'Series 5',
        model: '530i',
        fuel: 'petrol',
        price: 60000,
    },
    {
        img: './img/520d-touring.jpg',
        series: 'Series 5',
        model: '520d Touring',
        fuel: 'diesel',
        price: 65000,
    },
    {
        img: './img/m5.jpg',
        series: 'Series 5',
        model: 'M5',
        fuel: 'petrol',
        price: 120000,
    },
]

let out = document.querySelector('.out')
let inp1 = document.querySelector('.selects__price-sort-01')
let inp2 = document.querySelector('.selects__price-sort-02')
let btn = document.querySelector('.selects__btn')
let seriesSelect = document.querySelector('.selects__series')
let fuelTypeSelect = document.querySelector('.selects__fuel-type')

//Sworennia katrochky avto
function createCard(item) {
    let card = document.createElement('div')
    let cardImg = document.createElement('img')
    cardImg.src = item.img
    cardImg.width = 300
    cardImg.height = 200
    let cardTitle = document.createElement('h3')
    let cardFuel = document.createElement('p')
    let cardPrice = document.createElement('p')
    card.append(cardImg, cardTitle, cardFuel, cardPrice)
    cardTitle.innerHTML = 'BMW' + ' ' + item.model + ', ' + item.series
    cardFuel.innerHTML = item.fuel
    cardPrice.innerHTML = item.price + ' €'

    return card
}

//Vidobrajennia kartochok w out
cars.map(car => out.append(createCard(car)))

//select Fuel bez powtoren
let uniqueFuel = new Set()

cars.forEach(car => {
    uniqueFuel.add(car.fuel)
})

uniqueFuel.forEach(fuel => {
    let optionFuel = document.createElement('option')
    optionFuel.innerHTML = fuel
    fuelTypeSelect.append(optionFuel)
})



//Select Series bez powtoren
let uniqueSeries = new Set()
cars.forEach(car => {
    uniqueSeries.add(car.series)
})

uniqueSeries.forEach(series => {
    let optionSeries = document.createElement('option')
    optionSeries.innerHTML = series
    seriesSelect.append(optionSeries)
})


//Filtracija
btn.addEventListener('click', () => {


    //po typu Fuel
    let filteredByFuel = cars.filter(car => car.fuel == fuelTypeSelect.value)

    out.innerHTML = ''

    if (fuelTypeSelect.value == 'diesel' || fuelTypeSelect.value == 'petrol') {
        filteredByFuel.forEach(car => {
            out.append(createCard(car))
        })
    }


    //Po series

    let filteredBySeries = cars.filter(car => car.series == seriesSelect.value)

    out.innerHTML = ''

    if (seriesSelect.value == 'Series 1' ||
        seriesSelect.value == 'Series 2' ||
        seriesSelect.value == 'Series 3' ||
        seriesSelect.value == 'Series 4' ||
        seriesSelect.value == 'Series 5') {
        filteredBySeries.forEach(car => {
            out.append(createCard(car))
        })
    }
})


