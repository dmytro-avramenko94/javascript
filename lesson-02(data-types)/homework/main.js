//Minimum 1
let btn1 = document.querySelector('.btn-1')

btn1.onclick = () => {
    let inp1_1 = document.querySelector('.inp-min-1-1').value
    let inp1_2 = document.querySelector('.inp-min-1-2').value
    let res1 = document.querySelector('.min-1-result')
    let res1_2 = Number(inp1_1) + Number(inp1_2)

    res1.innerHTML = res1_2.toFixed(1)
}

//Minimum 2
let btn2 = document.querySelector('.btn-2')

btn2.onclick = () => {
    let inp2_1 = document.querySelector('inp-min-2-1')
    let inp2_2 = document.querySelector('inp-min-2-2')
    inp2_1 = "1"
    inp2_2 = 2
    let res2 = document.querySelector('.min-2-result')

    res2.innerHTML = Number(inp2_1) + Number(inp2_2)
    console.log(Number(inp2_1) + Number(inp2_2))
}

//Minimum 3

let btn3 = document.querySelector('.btn-3')

btn3.onclick = () => {
    let inp3 = document.querySelector('.inp-min-3').value
    let res3_1 = document.querySelector('.min-3-1-result')
    let res3_2 = document.querySelector('.min-3-2-result')

    res3_1.innerHTML = Math.floor(inp3 * 1000 / 820)
    res3_2.innerHTML = inp3 * 1000 % 820
}

//Normal 1
let btn4 = document.querySelector('.btn-4')

btn4.onclick = () => {
    let inp4_1 = document.querySelector('.inp-norm-11')
    let inp4_2 = document.querySelector('.inp-norm-12')
    let res4_1 = document.querySelector('.norm-1-1-result')
    let res4_2 = document.querySelector('.norm-1-2-result')

    res4_1.innerHTML = Math.floor(inp4_1.value / inp4_2.value) + " chocolates"
    res4_2.innerHTML = inp4_1.value % inp4_2.value
}

//Normal 2
let btn5 = document.querySelector('.btn-5')

btn5.onclick = () => {
    let inp5 = document.querySelector('.inp-norm-2')
    let res5 = document.querySelector('.norm-2-1-result')
    let calc1 = Math.floor(inp5.value / 100)
    let calc2 = Math.floor((inp5.value - (calc1 * 100)) / 10)
    let calc3 = inp5.value - (calc1 * 100) - (calc2 * 10)

    res5.innerHTML = `${calc3}` + `${calc2}` + `${calc1}`
}

//Maximum 1
let btn6 = document.querySelector('.btn-6')

btn6.onclick = () => {
    let inp61 = document.querySelector('.inp-max-1')
    let inp62 = document.querySelector('.inp-max-2')
    let res6 = document.querySelector('.max-1-result')
    let interest = Number(1) + Number(5 / 12 * inp62.value / 100) //Розрахування коефіцієнту, щоб отримати число без відсотків
    let calc4

    calc4 = inp61.value * interest
    res6.innerHTML = calc4.toFixed(2)
}