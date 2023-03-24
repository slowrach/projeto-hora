function troca() {
var title = window.document.getElementById('title')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

title.innerHTML = `Agora são <strong>${hora}h ${min}min </strong>`

if (hora >= 0 && hora < 12) {
    img.src = 'imagens/dia.png'
    document.body.style.background = '#53B1C6'
} else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#3D6D33'
} else {
    img.src = 'imagens/noite.png'
    document.body.style.background = '#364A68'
}
}