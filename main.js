// Responsive Navbar //
var navBtn = document.getElementById("navBtn");
var navList = document.getElementById("navMenu")
navBtn.addEventListener("click", ()=> {
    navList.classList.toggle("showNav");
});
