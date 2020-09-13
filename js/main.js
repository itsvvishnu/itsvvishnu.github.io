let about = document.getElementById("about");
let experience = document.getElementById("experience");
let work = document.getElementById("work");
let contact = document.getElementById("contact");
let navbarItems = document.querySelectorAll("#navbar a.nav-item");
let scrollOffSet = 50;

window.addEventListener("scroll", (event) => {
  var scroll = this.scrollY;
  if (scroll >= screen.height - 250) {
    document.getElementById("navbar").classList.add("sticky");
    document.getElementById("navbar").querySelector("nav").classList.add("container");
  } 
  else {
    document.getElementById("navbar").classList.remove("sticky");
  }
  Array.from(navbarItems).map(link =>{
    console.log(link)
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= scroll &&
      section.offsetTop + section.offsetHeight > scroll
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  })
});

//ANIMATION INIT

AOS.init({
  offset: 200,
  duration: 800,
  easing: "ease-in",
  delay: 100,
});

//TIMELINE

document.getElementById("workPlace").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target && e.target.matches("li *")) {
    let that = e.target.closest("li");
    if (!that.classList.contains("active")) {
      Array.from(that.parentNode.children).map((li) => {
        li.classList.remove("active");
      });
      that.classList.add("active");
      let workDet = document.getElementById("workDet");
      Array.from(workDet.children).map((c) => {
        c.classList.remove("show");
      });
      let wkTarget = that.getAttribute("data-com");
      document.getElementById(wkTarget).classList.add("show");
    }
  }
});

//SCROLL
document.getElementById("navItems").addEventListener("click", (e) => {
  if (e.target && e.target.matches("a.nav-item")) {
    let navLinks = document.getElementById("navItems").children;
    Array.from(navLinks).map((nav) => {
      nav.classList.remove("active");
    });
    e.target.classList.add("active");
    let hash = e.target.hash;
    console.log(hash);
    document
      .querySelector(hash)
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }
});
