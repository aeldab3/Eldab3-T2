let switcherLis = document.querySelectorAll(".portfolio .shuffle li");
let imgsBox = Array.from(document.querySelectorAll(".imgs-container .box"));

let stats = document.querySelector(".stats");
let statsNumber = document.querySelectorAll(".stats .box .number");
let started = false ; 

let ourSkills = document.querySelector(".our-skills");
let skillsSpan = document.querySelectorAll(".our-skills .prog-holder span");


// Filter Imgs in Portfolio 

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive)
    li.addEventListener("click", manageImgs)
});
//Remove Active Class Form All lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
//Manage Imgs
function manageImgs() {
    imgsBox.forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}


//scroll for stats
window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop - 460 && !started) {
            statsNumber.forEach((number) => startCount(number));
        started = true;
    }

function startCount(el) {
  let goal = el.dataset.num;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal){
        clearInterval(count);
    }
  }, 1801 / goal);  
}


//scroll for  ourSkills
    if(window.scrollY >=  ourSkills.offsetTop - 360) {
        skillsSpan.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    }

};

