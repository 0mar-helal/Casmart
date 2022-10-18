/* Header */
let mainHead=document.querySelector("section.header")
let nav =document.querySelector("nav.navbar")
let headerAction= document.querySelector("header ul.header-action");
let hamburgers=document.querySelectorAll(".hamburger");
let overlay=document.querySelector(".overlay");
let x=window.matchMedia("(min-width: 767px)");
window.onscroll= function() {
    if(x.matches) {
        if(window.scrollY>=100) {
            nav.classList.add("sticky-up");
        }
        else {
            nav.classList.remove("sticky-up");
        }
    }
    else {
        if(window.scrollY>=100) {
            mainHead.classList.add("sticky-up");
        }
        else {
            mainHead.classList.remove("sticky-up");
        }
    }
}
// for side navbar movment
hamburgers.forEach(el => {
    el.addEventListener("click",function() {
        nav.classList.toggle("open");
        nav.classList.toggle("close");
        overlay.classList.toggle("open");
        overlay.classList.toggle("close");
    })
});

/* Product Section */
// filtering boxes 
let option=document.querySelectorAll("section.product ul li");
let boxes=document.querySelectorAll("section.product .box");
option.forEach(li => {
    li.onclick=function(){
        option.forEach(el => {
            if(el.classList.contains("active")) el.classList.remove("active");
        });
        this.classList.add("active");
        boxes.forEach(el => {
            el.style.cssText="display:none;";
        });
        boxes.forEach(el => {
            if(el.classList.contains(`${li.dataset.cat}`)) el.style.cssText="display:flex;";
        });
    }
});
