document.addEventListener('DOMContentLoaded',() => {
    let menuBtn = document.querySelector(".menu_btn");
    let filterBtn = document.querySelector(".filter_section")
    
    let sideBar = document.querySelector('.sidebar_menu')
    let filterBar = document.querySelector('.filter_bar')
    let closeBtn = document.querySelector('.sidebar_menu_close_btn')
    let fltrCloseBtn = document.querySelector('.filter_menu_close_btn')
     menuBtn.addEventListener('click',() => {
        sideBar.classList.add("active")
     })
     closeBtn.addEventListener('click',() =>{
        sideBar.classList.remove("active")

     })
     filterBtn.addEventListener('click',() => {
        filterBar.classList.add('show')
     })
     fltrCloseBtn.addEventListener('click',() =>{
        filterBar.classList.remove("show")

     })

    fetch('courses.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let courseContainer = document.querySelector('.course');
        let hrContainer = document.querySelector('.hr_sroll');
        data.forEach(course => {
            let newEl = document.createElement('div');
            newEl.classList.add('courses_lists');
            newEl.innerHTML = `
        <div class="course_img">
         <img src="${course.img}  " alt="">
          </div>
          <div class="course_contents">
            <h1 class="course_description">
                ${course.course}
            </h1>
            <p class="author">
                ${course.instructor}
            </p>
            <div class="rating">
              <div class="rating_text">      
                 ${course.rating}
              </div>
                 ${course.stars}

            <div class="reviews">     
                 ${course.reviews}
            </div>
            </div>
            <div class="about_course">
              <div class="time">     
                  ${course.time}
             </div> 
              <span> </span>
              <div class="lectures">    
                ${course.lectures}
              </div>
              <span></span>

              <div class="levels">
              ${course.levels}
              </div>
            </div>
            <div class="price">
            ${course.price}
            </div>
            <div class="seller_tags">${course.tags}</div>
          </div>
         `; 
            courseContainer.appendChild(newEl);
        });
        }) 
    .catch(function (error) { 
        console.error("Error loading courses:", error);    
    });
})           
 