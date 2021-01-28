let white = document.querySelector(".white")
let black = document.querySelector(".black")
let body = document.querySelector(".window")

function randomColor() {
    let str = "0123456789ABCDEF"
    return "#xxxxxx".replace(
        /x/g,
        () => str[Math.floor(Math.random() * str.length)]
    )
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
function convertColor(color) {
    let number = new Array(6)
    let str = "0123456789ABCDEF"
    for (let i = 1; i < color.length; i++) {
        number[i - 1] = scale(str.indexOf(color[i]), 0, 15, 0, 1)
    }
    return number
}
let color = randomColor()
let knn = new KNN(5)
for (let i = 0; i < 5; i++)
    knn.addExample(convertColor(color), i % 2 == 0 ? "white" : "black")
let highligh_div = document.querySelectorAll(".h")
function predict() {
    let cl = knn.classify(convertColor(color))
    console.log(cl)
    if (cl.label == "white") {
        highligh_div[0].classList.add("highlight")
        highligh_div[1].classList.remove("highlight")
    } else {
        highligh_div[1].classList.add("highlight")
        highligh_div[0].classList.remove("highlight")
    }
    white.style.background = color
    black.style.background = color
}
predict()

white.onclick = () => {
    knn.addExample(convertColor(color), "white")
    color = randomColor()
    predict()
}

black.onclick = () => {
    knn.addExample(convertColor(color), "black")
    color = randomColor()
    predict()
}
