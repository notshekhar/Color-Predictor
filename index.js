let white = document.querySelector(".white")
let black = document.querySelector(".black")
let body = document.querySelector(".window")

let answer = [0, 0]
let r = Math.random()*(255-0+1)+0
let g = Math.random()*(255-0+1)+0
let b = Math.random()*(255-0+1)+0
let color = [r,g,b]
let nn = new fnn([3,5,2], 0.009999999776482582)
let q = nn.query(color)
if(math.findmax(q) == 0){
  body.style.background = `white`
  white.style.borderColor = `white`
  black.style.borderColor = `white`

}else{
  body.style.background = `black`
  white.style.borderColor = `black`
  black.style.borderColor = `black`
}
white.style.background = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 255)`
black.style.background = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 255)`


white.onclick = ()=>{
  answer = [1, 0]
  nn.learn(color, answer)
  r = Math.random()*(255-0+1)+0
  g = Math.random()*(255-0+1)+0
  b = Math.random()*(255-0+1)+0
  color = [r,g,b]
  q = nn.query(color)
  if(math.findmax(q) == 0){
    body.style.background = `white`
    white.style.borderColor = `white`
    black.style.borderColor = `white`
  }else{
    body.style.background = `black`
    white.style.borderColor = `black`
    black.style.borderColor = `black`
  }
  white.style.background = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 255)`
  black.style.background = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 255)`

}

black.onclick = ()=>{
  answer = [0, 1]
  nn.learn(color, answer)
  r = Math.random()*(255-0+1)+0
  g = Math.random()*(255-0+1)+0
  b = Math.random()*(255-0+1)+0
  color = [r,g,b]
  q = nn.query(color)
  if(math.findmax(q) == 0){
    body.style.background = `white`
    white.style.borderColor = `white`
    black.style.borderColor = `white`
  }else{
    body.style.background = `black`
    white.style.borderColor = `black`
    black.style.borderColor = `black`
  }
  white.style.background = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 255)`
  black.style.background = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 255)`

}
