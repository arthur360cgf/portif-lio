const burger= document.querySelector(".burger");
const headerMenu = document.querySelector(".header-menu");

burger.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
    console.log("CLICOU!!!")
    burger.classList.toggle("open")
})

document.querySelectorAll(".header-menu a").forEach(link =>{
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

document.addEventListener('click', (event) =>{
    const isMenuOpen =headerMenu.classList.contains('active');
    const isClickOutside = !headerMenu.contains(event.target) && !burger.contains(event.target);


    if(isMenuOpen && isClickOutside){
        headerMenu.classList.remove('active');
    }

});

