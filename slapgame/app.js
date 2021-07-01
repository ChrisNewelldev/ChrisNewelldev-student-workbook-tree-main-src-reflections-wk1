const attack = {
  slap: {
    damage: 10
  }
  punch
}

let health = 100
//let name = playername
let hits = 0

//function counter() {
//if (health <= 0) return
//let health = health - 'slap'
//document.getElementById('health').innerText
//}



function slap() {
  health = health - attack.slap.damage
  update()
}

function punch() {
  alert(health - 5)
  let uphealth = document.getElementById('health').innerText
}

function kick() {
  alert(health - 10)
  update()
}

function update() {

  document.getElementById('health').innerText = health

}


slap()