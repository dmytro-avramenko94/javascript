
//Примітивні типи даних
let num = 99
let str = "Name"
let bool = true

let nu = null // Коли взагалі нічого немає
let und = undefined // Коли є змінна, але у ній нічого немає
let a;
document.write(und)



// = : Присвоєння
// == : Порівнювання
// === : Порівняння типу даних

// a > b : Більше
// a < b : Менше


document.write(Boolean(3 > '5'))


document.write(43 + " " + typeof 43)
document.write(43 + " " + typeof "43")


// Декілька методів строк
document.write(str.toLocaleLowerCase())
document.write(str.includes("nam"))

let obj = {
    name: "iphone",
    price: 1300,
    model: '15 pro max'
}

document.write(typeof obj)


let arr = [
    {
        name: "iphone",
        price: 1300,
        model: '15 pro max'
    },
    {
        name: "iphone",
        price: 1300,
        model: '14 pro max'
    },
    {
        name: "iphone",
        price: 1300,
        model: '15 pro'
    }
]

document.write(typeof arr)

