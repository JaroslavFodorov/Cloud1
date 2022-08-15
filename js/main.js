window.onload = function() {

    function tab() {
        let btns = document.querySelectorAll('.btn'),
            vacancy = document.querySelectorAll('.vacancy__content'),
            vacancyName;

        vacancy[0].style.display = 'flex';

        btns.forEach(item => {
            item.addEventListener('click', selectBtn)
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



        
