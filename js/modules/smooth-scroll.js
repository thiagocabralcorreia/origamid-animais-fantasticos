export default function initSmoothScroll() {
    const innerLinks = document.querySelectorAll('[data-menu="soft"] a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })


    }

    innerLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}