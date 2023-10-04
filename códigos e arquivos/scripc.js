
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var result = window.document.getElementById('result')
    msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 && hora < 12) {
        img.src = 'imagem/manha.jpg'
        document.body.style.background = 'rgb(168, 216, 112)'
        result.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagem/tarde.jpg'
        document.body.style.background = 'rgb(213, 103, 0)'
        result.innerHTML = 'Boa Tarde!'
    } else {
        img.src = 'imagem/noite.jpg'
        document.body.style.background = 'rgb(31, 23, 102)'
        result.innerHTML = 'Boa Noite!'
    }
}