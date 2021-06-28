let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxsize = 300

function inflate (){
  clickCount++
  var balloonElement =  document.getElementById("balloon")
  height += inflationRate
  width += inflationRate
  balloonElement.style.height = height + "px"
  balloonElement.style.width = width + "px"

  if(height ≥ maxsize){
    console.log("pop the balloon")
    height = 0
    width = 0
  }


  var clickCountElem = document.getElementById("click-count")
  clickCountElem.innerText = clickCount.toString()
}