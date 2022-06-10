'use strict';/*Utilizando uma estrutura para fazer um carregamento dinâmico*/

const images = [/*Inserindo as Imagens */
    {'id':'1','url':'./img/chrono.jpg'},
    {'id':'2','url':'./img/inuyasha.jpg'},
    {'id':'3','url':'./img/tenchi.jpg'},
    {'id':'4','url':'./img/tenjhotenge.jpg'},
    {'id':'5','url':'./img/yuyuhakusho.jpg'},
    {'id':'6','url':'./img/ippo.png'},
]

const containerItems = document.querySelector('#container-items') /*pegando o id e colocando em javascript como container */


const loadImages = (images, container) =>{
    images.forEach(image =>{ 
        /*adicionando ao html a baixo.
        criando uma div item dentro do container-items, uma div item para cada image*/
        container.innerHTML += `
        <div class="item">
            <img src="${image.url}"
        </div>
        `
    });
}

loadImages(images, containerItems);/*As imagens e o container onde vão estar as imagens*/

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);/*append significa final, items[0] pega o primeiro item da lista*/
    /*Pegando a imagem e jogando pro final*/
    items = document.querySelectorAll('.item');/*Recarrega a lista*/
}

const next = () => {
    const lastItem = items[items.length - 1];/*Está pegando a quantidade como sempre começa do 0 tem ser -1*/
    containerItems.insertBefore(lastItem, items[0]);/*Está colocando o último item antes do primeiro*/
    items = document.querySelectorAll('.item');/*Recarrega a lista*/
}

document.querySelector('#previous').addEventListener('click', previous);/*Adiciona um evento de click na div previous*/
document.querySelector('#next').addEventListener('click', next);