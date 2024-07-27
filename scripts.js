document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const changeActiveLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    window.addEventListener('scroll', changeActiveLink);
    changeActiveLink();

    // Dynamic year update
    document.getElementById('year').textContent = new Date().getFullYear();

    // Contact form submission notification
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('[name="name"]').value;
        alert(`Thank you, ${name}, for your message! We'll get back to you soon.`);
        this.reset();
    });
});
