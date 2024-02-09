let sel = document.querySelector('.select')

let btn = document.querySelector('.btn')

function getRandomNumber() {
    return Math.floor(Math.random() * 4);
}

btn.onclick = () => {
    let compNumber = getRandomNumber()
    let res = document.querySelector('.result')

    switch (sel.value) {
        case '0':
            if (compNumber == 0) {
                res.innerHTML = "Камінь vs Камінь = Нічия!!"
            } else if (compNumber == 1) {
                res.innerHTML = "Бумага vs Камінь = Програш!!"
            }
            else {
                console.log(compNumber)
            }
            break;
        case '1':
            console.log("Бумага");
            break;
        case '2':
            console.log("Ножнеці");
            break;
        default:
            console.log("Не обрано");
            break;
    }
}