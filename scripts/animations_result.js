//Controlador de ScrollMagic

var controller = new ScrollMagic.Controller();

const $logo = document.getElementById('logo'); 
const $titles = document.getElementsByClassName('title'); 
const $subtitles = document.getElementsByClassName('subtitle'); 
const $texts = document.getElementsByClassName('text');
const $smalls = document.getElementsByTagName('small'); 

//Added

const $resultImage = document.getElementById('result_image'); 

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