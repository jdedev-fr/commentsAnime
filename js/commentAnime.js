//On attrape tous les articles
let articles = document.querySelectorAll("article")
//On attrape les 2 boutons
let btUp = document.querySelector('.up')
let btDown = document.querySelector('.down')
let numCarte = document.querySelector('.numCarte')

//On place la marge de départ pour bien placer la première carte
for (let i = 0; i < articles.length; i++) {
    articles[i].style.marginTop = (i == 0) ? "50px" : "0px"
}

//On déplace la première carte vers le haut tant qu'on est pas au bout
btUp.addEventListener('click', () => {
    if (parseInt(articles[0].style.marginTop) > (50 - (200 * (articles.length - 1)))) {
        articles[0].style.marginTop = parseInt(articles[0].style.marginTop) - 200 + "px"
        numCarte.innerHTML = ((Math.abs(parseInt(articles[0].style.marginTop) - 50) / 200) + 1) + "/" + articles.length
    }
})
//On déplace la première carte vers le bas tant qu'on est pas au bout
btDown.addEventListener('click', () => {
    if (parseInt(articles[0].style.marginTop) < 50) {
        articles[0].style.marginTop = parseInt(articles[0].style.marginTop) + 200 + "px"
        numCarte.innerHTML = ((Math.abs(parseInt(articles[0].style.marginTop) - 50) / 200) + 1) + "/" + articles.length
    }
})