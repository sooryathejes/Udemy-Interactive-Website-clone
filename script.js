document.addEventListener('DOMContentLoaded', () => {
    let menuBtn = document.querySelector(".menu_btn");
    let filterBtn = document.querySelector(".filter_section");

    let sideBar = document.querySelector('.sidebar_menu');
    let filterBar = document.querySelector('.filter_bar');
    let closeBtn = document.querySelector('.sidebar_menu_close_btn');
    let fltrCloseBtn = document.querySelector('.filter_menu_close_btn');
    let ratingDropdown = document.querySelector('.ratings_dropdown_btn');
    let languageDropdown = document.querySelector('.languages_dropdown_btn');
    let ratingList = document.querySelector('.rating_lists')
    let languageLists = document.querySelector('.language_lists')
    let notificationIcon = document.querySelector('.header_tab_notification');
    let wishlistIcon = document.querySelector('.header_tab_wishlist');
    let teach = document.querySelector('.header_tab_teach');
    let bussiness = document.querySelector('.header_tab_bussiness');
    let bussiness_dropdown = document.querySelector('.bussiness_dropdown')
    let teach_dropdown = document.querySelector('.teach_dropdown')

    
    teach.addEventListener('mouseover',() => {
        teach_dropdown.classList.add('teach_drop')
    })
    teach.addEventListener('mouseleave',() => {
        teach_dropdown.classList.remove('teach_drop')
    })
    bussiness.addEventListener('mouseover',() => {
        bussiness_dropdown.classList.add('bussiness_drop')
    })
    bussiness.addEventListener('mouseleave',() => {
        bussiness_dropdown.classList.remove('bussiness_drop')
    })


    function bussinessShow(){
        if(window.innerWidth >= 1081){
            bussiness.style.display = "block"
        }else{
            bussiness.style.display = "none"
        }
    }
    bussinessShow()
    window.addEventListener('resize',bussinessShow)

    function teachShow(){
        if(window.innerWidth >= 921){
            teach.style.display = "block"
        }else{
            teach.style.display = "none"
        }
    }
    teachShow();
    window.addEventListener('resize', teachShow);

    function notificationShow() {
        if (window.innerWidth >= 825) {
            notificationIcon.style.display = "block";
        } else {
            notificationIcon.style.display = "none";
        }
    }

    notificationShow();
    window.addEventListener('resize', notificationShow);

    function wishlistShow() {
        if (window.innerWidth >= 825) {
            wishlistIcon.style.display = "block";
        } else {
            wishlistIcon.style.display = "none";
        }
    }

    wishlistShow();
    window.addEventListener('resize', wishlistShow);

    menuBtn.addEventListener('click', () => {
        sideBar.classList.add("active");
    });

    ratingDropdown.addEventListener('click', () => {
        ratingList.classList.toggle('drop')
    })

    languageDropdown.addEventListener('click', () => {
        languageLists.classList.toggle('drop')
    })


    closeBtn.addEventListener('click', () => {
        sideBar.classList.remove("active");
    });

    filterBtn.addEventListener('click', () => {
        filterBar.classList.add('show');
    });

    fltrCloseBtn.addEventListener('click', () => {
        filterBar.classList.remove("show");
    });
    // -----fetch------
    let courseData = [];

    fetch('courses.json')
        .then(response => response.json())
        .then(data => {
            courseData = data;
            displayCourses(courseData);
        })
        .catch(error => {
            console.error("Error loading courses:", error);
        });

    function displayCourses(filteredCourses) {
        let courseContainer = document.querySelector('.course');
        courseContainer.innerHTML = '';

        filteredCourses.forEach(course => {
            let newEl = document.createElement('div');
            newEl.classList.add('courses_lists');
            newEl.innerHTML = `
                <div class="course_img">
                    <img src="${course.img}" alt="">
                </div>
                <div class="course_contents_main">
                <div class="course_contents">
                    <h1 class="course_description">${course.course}</h1>
                    <p class="coure_discrip">${course.courseDiscription}</p>
                    <p class="author">${course.instructor}</p>
                    <div class="rating">
                        <div class="rating_text">${course.rating}</div>
                        ${course.stars}
                        <div class="reviews">${course.reviews}</div>
                    </div>
                    <div class="about_course">
                        <div class="time">${course.time}</div>
                        <span></span>
                        <div class="lectures">${course.lectures}</div>
                        <span></span>
                        <div class="levels">${course.levels}</div>
                    </div>
                </div>
                <div class="price">₹${course.price}</div>
                </div>

            `;
            courseContainer.appendChild(newEl);
        });
    }
    // -----filter------
    let upfourhalf = document.querySelector(".upfourhalf");
    let upfour = document.querySelector(".upfour");
    let upthreehalf = document.querySelector(".upthreehalf");
    let upthree = document.querySelector(".upthree");
    let engLang = document.querySelector(".engLang");
    let spaLang = document.querySelector(".spaLang");
    let frLang = document.querySelector(".frLang");

    function ratingFourHalf() {
        let filteredCourses = courseData.filter(course => {
            let ratingValue = course.rating;
            return ratingValue >= 4.5;
        });
        displayCourses(filteredCourses);
    }
    function ratingFour() {
        let filteredCourses = courseData.filter(course => {
            let ratingValue = course.rating;
            return ratingValue >= 4.0 && ratingValue < 4.5;
        });
        displayCourses(filteredCourses);
    }
    function ratingThreeHalf() {
        let filteredCourses = courseData.filter(course => {
            let ratingValue = course.rating;
            return ratingValue >= 3.5 && ratingValue < 4.0;
        });
        displayCourses(filteredCourses);
    }
    function ratingThree() {
        let filteredCourses = courseData.filter(course => {
            let ratingValue = course.rating;
            return ratingValue >= 3.0 && ratingValue < 3.5;
        });
        displayCourses(filteredCourses);
    }
    let isEngFilter = false
    function languageEng() {
        let filteredCourses
        if (isEngFilter) {
            filteredCourses = courseData;
        } else {
            filteredCourses = courseData.filter(course => course.language === "English");
        }
        displayCourses(filteredCourses);
        isEngFilter = !isEngFilter;

    }
    let isSpaFilter = false
    function languageSpa() {
        let filteredCourses
        if (isSpaFilter) {
            filteredCourses = courseData;
        } else {
            filteredCourses = courseData.filter(course => course.language === "Spanish");
        }
        displayCourses(filteredCourses);
        isSpaFilter = !isSpaFilter;
  
    } 

    let isFrFilter = false;

    function languageFr() {
        let filteredCourses;
        if (isFrFilter) {
            filteredCourses = courseData;
        } else {
            filteredCourses = courseData.filter(course => course.language === "French");
        }
        displayCourses(filteredCourses);
        isFrFilter = !isFrFilter;
    };

    upfourhalf.addEventListener("click", ratingFourHalf);
    upfour.addEventListener("click", ratingFour);
    upthreehalf.addEventListener("click", ratingThreeHalf);
    upthree.addEventListener("click", ratingThree);
    engLang.addEventListener("click", languageEng);
    spaLang.addEventListener("click", languageSpa);
    frLang.addEventListener("click", languageFr);



}); 