document.addEventListener('DOMContentLoaded', function() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const dailyElement = document.querySelector('.daily');

    if (dailyElement) {
        dailyElement.insertAdjacentHTML('beforebegin', `<p class="greeting">${greeting}</p>`);
    }
    
    // Image Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel .slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 1500); // Change image every 1.5 seconds
    showSlide(slideIndex);

    // Image scrolling
    function handleScroll(button, direction) {
        const section = button.closest('.top-picks');
        const coffeesContainer = section.querySelector('.coffees');
        const scrollAmount = direction === 'left' ? -350 : 350;
        coffeesContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    document.querySelectorAll('.scroll-left').forEach(button => {
        button.addEventListener('click', () => handleScroll(button, 'left'));
    });

    document.querySelectorAll('.scroll-right').forEach(button => {
        button.addEventListener('click', () => handleScroll(button, 'right'));
    });

    // Navbar scrolling
    const links = document.querySelectorAll('.navbar nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight,
                behavior: 'smooth'
            });
        });
    }
});
