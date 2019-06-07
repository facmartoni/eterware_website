//Controlador de ScrollMagic

var controller = new ScrollMagic.Controller();

const $logo = document.getElementById('logo'); 
const $heroImage = document.getElementById('hero_image'); 
const $heroTextOne = document.getElementById('hero_text_one')
const $heroTextTwo = document.getElementById('hero_text_two')
const $heroTextThree = document.getElementById('hero_text_three')
const $whatWeAreImage = document.getElementById('what_we_are_image');
const $priceOne = document.getElementById('price_one');
const $priceTwo = document.getElementById('price_two');
const $priceThree = document.getElementById('price_three');
const $whatWeCanGiveYouElements = document.getElementsByClassName('what_we_can_give_you_element'); 
const $whatWeDidImage = document.getElementById('what_we_did_image'); 
const $ourQualityImageOne = document.getElementById('our_quality_image_one'); 
const $ourQualityImageTwo = document.getElementById('our_quality_image_two'); 
const $ourQualityImageThree = document.getElementById('our_quality_image_three'); 
const $buttonSend = document.getElementById('button_send'); 
const $socialNetworkOne = document.getElementById('social_network_one'); 
const $socialNetworkTwo = document.getElementById('social_network_two'); 
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

// Menu class toggle

applyClassToggleMenu('#what_we_are', '#menu_element_one');
applyClassToggleMenu('#the_price', '#menu_element_one', 'white_color');
applyClassToggleMenu('#the_price', '#menu_element_two');
applyClassToggleMenu('#what_we_can_give_you', '#menu_element_two', 'white_color');
applyClassToggleMenu('#what_we_can_give_you', '#menu_element_three');
applyClassToggleMenu('#what_we_did', '#menu_element_three', 'white_color');
applyClassToggleMenu('#what_we_did', '#menu_element_four');
applyClassToggleMenu('#our_quality', '#menu_element_four', 'white_color');
applyClassToggleMenu('#our_quality', '#menu_element_five');
applyClassToggleMenu('#contact_us', '#menu_element_five', 'white_color');
applyClassToggleMenu('#contact_us', '#menu_element_six');

// Texts animations

applyAnimationText($titles);
applyAnimationText($subtitles);
applyAnimationText($texts);
applyAnimationText($smalls);

// Header animations

applyAnimation($logo, 'rotateIn', false);

// Hero animations

applyAnimation($heroImage, 'bounceIn');
applyAnimation($heroTextOne, 'bounceInLeft');
applyAnimation($heroTextTwo, 'bounceInLeft');
applyAnimation($heroTextThree, 'bounceInLeft');

// What we are animations

if(p1024){
    applyAnimation($whatWeAreImage, 'bounceIn', false, 200); 
}else{
   applyAnimation($whatWeAreImage, 'bounceIn'); 
}

// The price animations

if(p1024){
    applyAnimation($priceOne, 'fadeInLeft', false, 200);
    applyAnimation($priceTwo, 'fadeInUp', false, -100);
    applyAnimation($priceThree, 'fadeInRight', false, 200);
}else{
    applyAnimation($priceOne, 'fadeInLeft', false, 200);
    applyAnimation($priceTwo, 'fadeInRight', false, 200);
    applyAnimation($priceThree, 'fadeInUp', false, -100);
}

// What we can give you animations

let counter=0; 
let breaker= p1280 ? 5 : p1024 ? 4 : 3; 

for(let i=0; i<$whatWeCanGiveYouElements.length; i++){
    $whatWeCanGiveYouElements[i].style.animationDelay = `${counter+=0.2}s`;
    if((i+1)%breaker === 0 && i!=0) counter=0;  
    applyAnimation($whatWeCanGiveYouElements[i], 'bounceIn', false, 0); 
}

// What we did animations

applyAnimation($whatWeDidImage, 'fadeIn')

// Our quality animations

applyAnimation($ourQualityImageOne, 'lightSpeedIn'); 
applyAnimation($ourQualityImageTwo, 'lightSpeedIn'); 
applyAnimation($ourQualityImageThree, 'lightSpeedIn'); 

// Contact us animations

applyAnimation($buttonSend, 'rubberBand', false, 0); 

// Social networks animations

applyAnimation($socialNetworkOne, 'fadeInLeft', false, 0);
applyAnimation($socialNetworkTwo, 'fadeInRight', false, 0);
