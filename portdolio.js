let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classLinks.remove('active');
                document.querySelector('header nav a[href* = ' + id + ']').classList.add('active');
        });
        
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY> 100);
};
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay : 100
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .layers h4', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });