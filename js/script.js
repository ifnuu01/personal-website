
const nav = document.querySelector('.nav-menu');
const burger = document.querySelector('#burger-menu');
const button = document.querySelector('.button-color');
const form = document.getElementById('contactForm');



burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if(!burger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    }
})

button.addEventListener('click', () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    button.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('pesan').value;

    var fullMessage = `Name: ${name}\nEmail: ${email}\nmessage: ${message}`;


    var whatsappUrl = `https://wa.me/6289501603099?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank');
});
