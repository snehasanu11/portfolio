let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scroll>20){
       nav.classList.add("head")
    }
    else{
        nav.classList.remove("head") 
    }
}
//nav hide
let navbar=document.querySelectorAll(".nav-link")
let navCollapse=document.querySelector(".navbar-collapse.collapse")
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})