document.addEventListener('DOMContentLoaded', function() {
    var navClasses = document.querySelector('nav').classList;
    navClasses.add('navigation--top');
    
    var logo = document.querySelector('.navigation__logo');
    
    function shrinkNav() {
        var wHeight = window.innerHeight - 100;
        var yoffset = window.pageYOffset;

        if (yoffset >= wHeight) {
            navClasses.add('navigation--shrinked');
            logo.style.fontSize = '1em';
        }
        else {
            navClasses.remove('navigation--shrinked');
            navClasses.add('navigation--top');
            logo.style.fontSize = '1.5em';
        }
    }

    window.addEventListener('scroll',shrinkNav);
});


