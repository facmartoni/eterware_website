// Elementos del DOM

const $menuButton = document.getElementById('menu_button');
const $menuButtonImage = document.getElementById('menu_button_image');
const $menu = document.getElementById('menu'); 
const $menuAnchors = document.getElementsByClassName('menu_anchor');
const $body = document.getElementById('body');
const $html = document.getElementById('html');
const $header = document.getElementById('header'); 
const $menuAnchorsFirstList = document.getElementsByClassName('menu_anchor_first');
const $menuAnchorsSecondList = document.getElementsByClassName('menu_anchor_second');
const $anchorsFirstContainer = document.getElementById('anchors_first_container'); 
const $anchorsSecondContainer = document.getElementById('anchors_second_container'); 

// Variables varias

var menuActiveImage = '../res/Menu_first_state.png';
var menuDisableImage = '../res/Menu_second_state.png'; 

// Media Queries

const p360 = window.matchMedia("(min-width: 360px)").matches; 
const p410 = window.matchMedia("(min-width: 410px)").matches; 
const p480 = window.matchMedia("(min-width: 480px)").matches; 
const p600 = window.matchMedia("(min-width: 600px)").matches; 
const p768 = window.matchMedia("(min-width: 768px)").matches; 
const p1024 = window.matchMedia("(min-width: 1024px)").matches; 
const p1280 = window.matchMedia("(min-width: 1280px)").matches; 

// Funciones

const toggleMenu = () => {
    $menu.classList.toggle('unfold');
    $body.classList.toggle('overflow_hidden');
    $menuButtonImage.classList.toggle('reduce_menu_button_width');
    if ($menuButtonImage.getAttribute('src') === menuActiveImage){
        $menuButtonImage.setAttribute('src', menuDisableImage);
    }
    else{
        $menuButtonImage.setAttribute('src', menuActiveImage);
    }
}

const addEventClick = ($element, fn) => {
    $element.addEventListener('click', fn);
}


const addEventsClick = ($list, fn) => {
    Array.prototype.forEach.call($list, ($element) => {
        addEventClick($element, toggleMenu); 
    })
}

const appendChilds = ($DOMelement, $list) => {
    Array.prototype.forEach.call($list, $element => {
        $DOMelement.appendChild($element); 
    })
}

const controlMenu = () => {
    if(!p1280){
        addEventClick($menuButton, toggleMenu); 
        addEventsClick($menuAnchors, toggleMenu); 
    }
    else{
        appendChilds($anchorsFirstContainer, $menuAnchorsFirstList);
        appendChilds($anchorsSecondContainer, $menuAnchorsSecondList);
        $body.removeChild($menu); 
        $header.removeChild($menuButton);
    }
}

// Pila de ejecución

controlMenu(); 