// Responsive Navbar //
var navBtn = document.querySelector("#navBtn");
var navList = document.querySelector("#navMenu")
navBtn.addEventListener("click", ()=> {
    navList.classList.toggle("showNav");
});

// Load More //
var loadMore = document.querySelector("#loadMore");
var content = document.querySelectorAll(".content");
var newArray = Array.from(content).slice(0, 4);
newArray.forEach(element => {
    element.classList.remove("none");
});
loadMore.addEventListener('click', ()=> {
    var moreContent = Array.from(content).slice(5, 10);
    moreContent.forEach(element => {
        element.classList.toggle("none");
    });
    if (loadMore.innerHTML = "Less") {
        loadMore.innerHMTL = "More";
    } else {
        loadMore.innerHTML = "Less";
    }
});