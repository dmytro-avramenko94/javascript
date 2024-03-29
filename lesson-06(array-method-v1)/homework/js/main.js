
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

let out1 = document.querySelector('.out1')
let out2 = document.querySelector('.out2')
let out3 = document.querySelector('.out3')
let out4 = document.querySelector('.out4')
let out5 = document.querySelector('.out5')
let inp1 = document.querySelector('.selects__price-sort-01')
let inp2 = document.querySelector('.selects__price-sort-02')
let btn = document.querySelector('.selects__btn')
let seriesSelect = document.querySelector('.selects__series')
let fuelTypeSelect = document.querySelector('.selects__fuel-type')




cars.map(car => {

    let createCard = function () {
        let card = document.createElement('div')
        let carImg = document.createElement('img')
        carImg.src = car.img
        carImg.width = 300
        let cardTitle = document.createElement('h3')
        let cardFuel = document.createElement('p')
        let cardPrice = document.createElement('p')
        card.append(carImg, cardTitle, cardFuel, cardPrice)
        cardTitle.innerHTML = 'BMW' + ' ' + car.model + ', ' + car.series
        cardFuel.innerHTML = car.fuel
        cardPrice.innerHTML = car.price + ' €'

        return card
    }


    let card = createCard()
    if (car.series == 'Series 1') {
        out1.append(card)
    }
    else if (car.series == 'Series 2') {
        out2.append(card)
    }
    else if (car.series == 'Series 3') {
        out3.append(card)
    }
    else if (car.series == 'Series 4') {
        out4.append(card)
    }
    else if (car.series == 'Series 5') {
        out5.append(card)
    }

})

//Robymo select Fuel bez powtoren
let uniqueFuel = new Set()
cars.forEach(car => {
    uniqueFuel.add(car.fuel)
})
uniqueFuel.forEach(fuel => {
    let optFuel = document.createElement('option')
    optFuel.innerHTML = fuel
    fuelTypeSelect.append(optFuel)
})

//robymo sortuwannia
btn.onclick = () => {
    cars.map(car => {
        let createCard = function () {
            let card = document.createElement('div')
            let carImg = document.createElement('img')
            carImg.src = car.img
            carImg.width = 300
            let cardTitle = document.createElement('h3')
            let cardFuel = document.createElement('p')
            let cardPrice = document.createElement('p')
            card.append(carImg, cardTitle, cardFuel, cardPrice)
            cardTitle.innerHTML = 'BMW' + ' ' + car.model + ', ' + car.series
            cardFuel.innerHTML = car.fuel
            cardPrice.innerHTML = car.price + ' €'

            return card
        }

        //sortuwannia po fuel
        let selectedFuel = fuelTypeSelect.value
        out1.innerHTML = ''
        out2.innerHTML = ''
        out3.innerHTML = ''
        out4.innerHTML = ''
        out5.innerHTML = ''

        let filteredByFuelCars = cars.filter(car => car.fuel == selectedFuel)
        console.log(filteredByFuelCars);

        filteredByFuelCars.forEach(filteredByFuelCar => {
            let card = createCard()
            if (filteredByFuelCar.series == 'Series 1') {
                out1.append(card)
            }
            else if (filteredByFuelCar.series == 'Series 2') {
                out2.append(card)
            }
            else if (filteredByFuelCar.series == 'Series 3') {
                out3.append(card)
            }
            else if (filteredByFuelCar.series == 'Series 4') {
                out4.append(card)
            }
            else if (filteredByFuelCar.series == 'Series 5') {
                out5.append(card)
            }
        })
    })



}

