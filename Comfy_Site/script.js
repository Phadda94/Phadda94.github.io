const section2 = document.getElementById('divine-choice-page');
const section1 = document.getElementById('main-page');
const goToSection2Btn = document.getElementById('goToSection2');
const backToHomeBtb = document.getElementById('goToHome');
const body = document.querySelector("body");



const backToTop = () => {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, 1000);
}

const hidePage = () => {
    setTimeout(() => {
        section1.style.display = "none";
    }, 1000);
};

goToSection2Btn.addEventListener('click', () => {
    section2.classList.add('show-section2');
    backToHomeBtb.classList.add('show-btn2');
    hidePage();
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, 500);

});


backToHomeBtb.addEventListener('click', () => {
    section2.classList.remove('show-section2');
    backToHomeBtb.classList.remove('show-btn2');
    section1.classList.remove('hide-main-page');
    section1.style.display = "flex";
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, 500);
  
})