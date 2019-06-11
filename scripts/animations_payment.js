//Controlador de ScrollMagic

var controller = new ScrollMagic.Controller();

const $logo = document.getElementById('logo'); 
const $buttons = document.getElementsByClassName('btn_enviar'); 
const $paymentCards = document.getElementsByClassName('payment_card'); 
const $titles = document.getElementsByClassName('title'); 
const $subtitles = document.getElementsByClassName('subtitle'); 
const $texts = document.getElementsByClassName('text');
const $smalls = document.getElementsByTagName('small'); 

const applyAnimation = ($element, animationName, reverseValue = true, offsetValue = 50) => {
    new ScrollMagic.Scene({
        triggerElement: $element,
        offset: offsetValue,
        triggerHook: 0.9,
        reverse: reverseValue,
    })
        .setClassToggle($element, animationName)
        .addTo(controller)
}

const applyAnimationText = $list => {
    for(let i=0; i<$list.length; i++){
        $list[i].classList.add('animated', 'without_opacity'); 
        applyAnimation($list[i], 'fadeInUp', false, -10); 
    }
}

const applyClassToggleMenu = (sectionElement, menuElement, classAdded = 'green_color') => {
    new ScrollMagic.Scene({triggerElement: sectionElement})
        .setClassToggle(menuElement, classAdded)
        .addTo(controller);
}

// Texts animations

applyAnimationText($titles);
applyAnimationText($subtitles);
applyAnimationText($texts);
applyAnimationText($smalls);

// Header animations

applyAnimation($logo, 'rotateIn', false);

// Buttons animations

for (let i=0; i<$buttons.length; i++){
    applyAnimation($buttons[i], 'rubberBand', false); 
}

// Cards animations 

for(let i=0; i<$paymentCards.length; i++){
    applyAnimation($paymentCards[i], 'fadeIn', false); 
}
