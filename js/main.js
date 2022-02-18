/******** handle menu pull-out and render page non-scrollable ********/ 

const toggleMenu = (event) => {

    const menu = document.querySelector('nav.menu');
    const button = event.target;
    if (menu.classList.contains('menu-open')) {
        menu.classList.remove('menu-open')
        button.classList.remove('button-toggled')
        document.body.classList.remove('no-scroll')
    } else {
        menu.classList.add('menu-open')
        button.classList.add('button-toggled')
        document.body.classList.add('no-scroll')
    }
}


/***************** handle wave animation with scroll ****************/

const wave = document.querySelector('.wave-container-1');

// function to scale scroll position to the wave position
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

window.onscroll = () => {
    calcScroll()
};

const calcScroll = () => {
    var winScroll = document.body.scrollTop;
    var height = document.body.scrollHeight - document.body.clientHeight;
    var scrolled = (winScroll / height) * 100;

    if (window.innerWidth > 1920) {
        var scaleMax = -1500; // slower on bigger screens
    } else if (window.innerWidth < 576) {
        var scaleMax = -3500; // faster for smaller screens
    } else {
        var scaleMax = -2500;
    }

    var newmargin = scale(scrolled, 0, 100, 0, scaleMax);

    // set mapped scroll % to the wave position
    wave.style.marginLeft = newmargin;
}