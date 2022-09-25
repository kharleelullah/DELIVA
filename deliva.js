const btnElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

btnElement.addEventListener('click', function(){
    headerElement.classList.toggle("nav-open");
});

const faqs = document.querySelectorAll(".faqp");

faqs.forEach((faqp) => {
    faqp.addEventListener("click", () => {
        faqp.classList.toggle("active");
    });
});
