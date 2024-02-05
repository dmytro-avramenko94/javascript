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