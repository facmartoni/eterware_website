//Controlador de ScrollMagic

var controller = new ScrollMagic.Controller();

const $logo = document.getElementById('logo'); 
const $titles = document.getElementsByClassName('menu_anchor'); 

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

// Texts animations

applyAnimationText($titles);

// Header animations

applyAnimation($logo, 'rotateIn', false);