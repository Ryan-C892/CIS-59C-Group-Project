// Responsive Navbar //
var navBtn = document.querySelector("#navBtn");
var navList = document.querySelector("#navMenu")
navBtn.addEventListener("click", ()=> {
    navList.classList.toggle("showNav");
});

// Events //
function EventHandler() {
    var loadMore = document.querySelector("#loadMore");
    var content = document.querySelectorAll(".content");
    var newArray = Array.from(content).slice(0, 4);
    newArray.forEach(element => {
        element.classList.remove("none");
    });
    loadMore.addEventListener('click', ()=> {
        var moreContent = Array.from(content).slice(4, 10);
        moreContent.forEach(element => {
            element.classList.toggle("none");
        });
    });
    loadMore.addEventListener('click', ()=> {
        if(loadMore.innerHTML == "Less") {
            loadMore.innerHTML = "More";
        } else {
            loadMore.innerHTML = "Less";
        }
    });
}
EventHandler();