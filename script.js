
// The radius variable is written here
let diameter = 0
let radius = 0
let results = 0
document.getElementById('button-one').addEventListener('click', area)
document.getElementById('button-two').addEventListener('click', circumfrence)
// This function is created for to calculate area and circumfrence
function area () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  radius = diameter / 2
  results = Math.PI * (radius * radius)
  document.getElementById('results').innerHTML = Math.round(results * 10) / 10
}
// A another function created for buttonTwo
function circumfrence () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  radius = diameter / 2
  results = 2 * Math.PI * radius
  document.getElementById('results').innerHTML = Math.round(results * 10) / 10
}
