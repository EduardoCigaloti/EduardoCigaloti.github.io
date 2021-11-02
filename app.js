function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo")
    if(campo.style.display == "none"){
    campo.style.display = "inline"
    }else{
        campo.style.display = "none"
    }
}

// objetos + array
projeto1 = {
    titulo: 'Calculadora',
    descricao: 'Projeto desenvolvido utilizando javascript, html e css de uma Calculadora de média simples',
    foto: 'calculadora.png'
}

projeto2 = {
    titulo: 'Conversor',
    descricao: 'Projeto desenvolvido utilizando javascript, html e css de um Conversor de Dólar para Real',
    foto: 'conversor.png'
}

projeto3 = {
    titulo: 'Mentalista',
    descricao: 'Projeto desenvolvido utilizando javascript, html e css de um jogo de adivinhação através de números aleatórios',
    foto: 'mentalista.png'
}

projeto4 = {
    titulo: 'Site simples',
    descricao: 'Projeto desenvolvido utilizando html e css para um site de pizzaria',
    foto: 'pizzaria.png'
}

let projetos = [projeto1 , projeto2 , projeto3 , projeto4]

let projetoAtual = 0

function ProximoProjeto(){
    if(projetoAtual < 3){
        projetoAtual++
    }else{
        projetoAtual = 0
    }

    titulo = document.querySelector(".titulo-projeto")
    titulo.innerHTML = projetos[projetoAtual].titulo

    descricao = document.querySelector(".texto-corpo")
    descricao.innerHTML = projetos[projetoAtual].descricao

    imagem = document.querySelector(".foto-perfil")
    imagem.src = "images/" + projetos[projetoAtual].foto
}