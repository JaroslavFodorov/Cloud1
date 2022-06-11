window.onload = function() {



/*let director = document.querySelector('.vacancy__content-director');
let employees = document.querySelector('.vacancy__content-employees');
let accountant = document.querySelector('.vacancy__content-accountant');
let hr = document.querySelector('.vacancy__content-hr')
let directorBtn = document.querySelector('.vacancy__director');
directorBtn.addEventListener('click', function() {
    director.style.display = 'flex';
    accountant.style.display = 'none';
    employees.style.display = 'none';
    hr.style.display = 'none';
})

let accountantBtn = document.querySelector('.vacancy__accountant');
accountantBtn.addEventListener('click', function() {
    accountant.style.display = 'flex';
    director.style.display = 'none';
    employees.style.display = 'none';
    hr.style.display = 'none';
})

let employeesBtn = document.querySelector('.vacancy__employees');
employeesBtn.addEventListener('click', function() {
    accountant.style.display = 'none';
    director.style.display = 'none';
    employees.style.display = 'flex';
    hr.style.display = 'none';
})

let hrBtn = document.querySelector('.vacancy__hr')
hrBtn.addEventListener('click', function() {
    accountant.style.display = 'none';
    director.style.display = 'none';
    employees.style.display = 'none';
    hr.style.display = 'flex';
})*/
function tab() {
    let btns = document.querySelectorAll('.btn'),
        vacancy = document.querySelectorAll('.vacancy__content'),
        vacancyName;

    vacancy[0].style.display = 'flex';

    btns.forEach(item => {
        item.addEventListener('click', selectBtn)
        /*item.addEventListener('click', function() {
            btns.forEach(function(item) {
                item.classList.remove('vacancy__element_active')  
            })
            item.classList.add('vacancy__element_active')
        }, false)*/
    })
    function selectBtn() {
        btns.forEach(item => {
            item.classList.remove('vacancy__element_active')
        });
        this.classList.add('vacancy__element_active')
        vacancyName = this.getAttribute('data-tab-name');
        selectVacancyContent(vacancyName);
    }

    function selectVacancyContent(vacancyName) {
        vacancy.forEach(item => {
            item.classList.contains(vacancyName) ? item.style.display = 'flex' : item.style.display = 'none';
        })
    }
}

tab();

/*const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const slides = document.getElementsByClassName('.slide-content__img');
const dots = document.getElementsByClassName('.slider-dot');

let index = 0;

const activeSlide = n => {
    console.log(n);
    for(slide of slides) {
        slide.classList.remove("slider-content__img_active");
    }
    slides[n].classList.add("slider-content__img_active");
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove("slider-dot_active");
    }
    let i = n;
    dots[i].classList.add("slider-dot_active");
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);*/

function Slider() {
    let btnNext = document.querySelector(".next");
    let btnPrev = document.querySelector(".prev");
    let slider = document.querySelectorAll(".slider-content__img");
    let viewSliders = document.querySelectorAll(".slider-dot");
    let viewSlide = 0;
    let viewSlider = 0;

    viewSliders[0].style.backgroundColor = "#FF6600";
    slider[0].style.display = 'block';

    
    btnNext.addEventListener("click", function () {
        viewSliders[viewSlide].style.backgroundColor = "#999999";
        slider[viewSlider].style.display = 'none';
        if (viewSlide < 4 && viewSlider < 4) {
            viewSlide++;
            viewSlider++;
        } else {
            viewSlide = 0;
            viewSlider = 0;
        }
        viewSliders[viewSlide].style.backgroundColor = "#FF6600";
        //slider.style.left = -viewSlide * viewport + "px";
        slider[viewSlider].style.display = 'block';
    });

    btnPrev.addEventListener("click", function () {
        viewSliders[viewSlide].style.backgroundColor = "#999999";
        slider[viewSlider].style.display = 'none';
        if (viewSlide > 0 && viewSlider > 0) {
            viewSlide--; 
            viewSlider--;
        } else {
            viewSlide = 4; 
            viewSlider = 4;
        }
        viewSliders[viewSlide].style.backgroundColor = "#FF6600";
        //slider.style.left = -viewSlide * viewport + "px";
        slider[viewSlider].style.display = 'block';
    });
}
Slider();

    function burger () {
        let burger = document.querySelector('.burger')
        burger.addEventListener('click', function() {
            document.querySelector('.menu-background').style.display = 'block';
        })
        document.querySelector('.cancel').addEventListener('click', function() {
            document.querySelector('.menu-background').style.display = 'none';
        })
    }

    burger();

    function table() {
        let tableDot = document.querySelectorAll('.table-dot')
    
        tableDot.forEach(function(item) {
            item.addEventListener('click', function() {
                tableDot.forEach(function(item) {
                    item.classList.remove('table-dot_active')  
                })
                item.classList.add('table-dot_active')
            }, false)
        })
    }

    table();
}






/*function activeElement(iterator) {
    return function () {
        btns.forEach(function(item,active) {
            item.classList.remove('vacancy__element_active')
            if(iterator = active) {
                item.classList.add('vacancy__element_active')
            }
        })
        vacancyContent.forEach(function(item,active) {
            item.style.display = 'none'
            if(iterator = active) {
                item.style.display = 'flex'
            }
        })
    }
}*/



        
