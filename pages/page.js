document.getElementById('index').href = PAGE ? '../index.html' : 'index.html'
document.getElementById('logo').src = PAGE ? '../assets/img/logo.png' : 'assets/img/logo.png'
document.getElementById('home').href = PAGE ? '../index.html' : 'index.html'
document.getElementById('calcularIdadeGestacional').href = PAGE ? 'calcularIdadeGestacional.html' : 'pages/calcularIdadeGestacional.html'

console.log(document.getElementById('logo').src)
console.log(document.getElementById('home').href)


