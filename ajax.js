
let xhttp = new XMLHttpRequest();

let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";

let criaGenero = filme => filme.generos.reduce((elementos, item) => elementos + `<li class="lista">${item}</li>`, "")

let criaElenco = filme => filme.elenco.reduce((elementos, item) => elementos + `<li class="lista">${item}</li>`, "")

let rating = filme => {
    switch (filme) {
        case 5:
            return `<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i>`
            break;
        case 4:
            return `<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star"></i>`
        case 3:
            return `<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
        case 2:
            return `<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
        case 1:
            return `<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
        default:
            return filme
            break;
    }
}

let criaIndica = filme => {
    if(filme <= 14)
    return `<span><p class="indica green">${filme}</p></span>`
    if(filme > 14 && filme < 18)
    return `<span><p class="indica yellow">${filme}</p></span>`
    if(filme >= 18)
    return `<span><p class="indica red">${filme}</p></span>`
}

let criaOpiniao = filme => filme.opinioes.reduce((elementos, item) => elementos + `<div class="ratingBox"><li class="listaRating"><q>${item.descricao}</q></li><li class="listaRating">${rating(item.rating)}</li> </div>`, "")

let criaApresentacao = (filme) => {
    return `
    <div class="filme">
        <img class="img" src="${filme.figura}" alt="${filme.titulo}">
        <div>
            <div class="tituloIndica">
                <h2>${filme.titulo}</h2>
                ${criaIndica(filme.classificacao)}
            </div>
                <p class="descricao">${filme.resumo}</p>
            <div class="genero">
                <p class="name">Gêneros: </p>
                <ul>
                    ${criaGenero(filme)}
                </ul>
            </div>
            <div class="elenco">
                <p class="name">Elenco: </p>
                <ul>
                    ${criaElenco(filme)} 
                </ul>
            </div>
            <div class="rating">
                <p class="name">Comentários: </p>
                <ul>
                    ${criaOpiniao(filme)}
                </ul>
            </div>
        </div>
    </div>`
}

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && xhttp.status == 200) {
        let filmes = JSON.parse(this.responseText)
        // console.log(filmes)
        let secao = document.querySelector("#filmes")
        filmes.forEach(filmes => {
            // console.log(filmes)
            secao.innerHTML += criaApresentacao(filmes)
        })
    }
}

xhttp.open("GET", url, true)

xhttp.send()