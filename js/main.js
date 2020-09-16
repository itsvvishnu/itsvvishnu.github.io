let navbarItems = document.querySelectorAll("#navbar a.nav-item");
let navbarItemsMob = document.querySelectorAll("#navLinks a");
let scrollOffSet = 50;

window.addEventListener("scroll", (event) => {
  var scroll = this.scrollY;
  if (document.getElementById("about").offsetTop <= scroll) {
    document.getElementById("skills").classList.add("bar-animate");
  }
  if (scroll >= screen.height - 250) {
    document.getElementById("navbar").classList.add("sticky");
    document
      .getElementById("navbar")
      .querySelector("nav")
      .classList.add("container");
  } else {
    document.getElementById("navbar").classList.remove("sticky");
    document
      .getElementById("navbar")
      .querySelector("nav")
      .classList.remove("container");
  }
  Array.from(navbarItems).map((link) => {
    let section = document.querySelector(link.hash);
    if (
      !(
        document.documentElement.scrollTop + window.innerHeight ==
        document.documentElement.scrollHeight
      )
    ) {
      if (
        section.offsetTop <= scroll &&
        section.offsetTop + section.offsetHeight > scroll
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
  Array.from(navbarItemsMob).map((link) => {
    let section = document.querySelector(link.hash);
    if (
      !(
        document.documentElement.scrollTop + window.innerHeight ==
        document.documentElement.scrollHeight
      )
    ) {
      if (
        section.offsetTop <= scroll &&
        section.offsetTop + section.offsetHeight > scroll
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
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
    let hash = e.target.hash;
    document
      .querySelector(hash)
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }
});

document.addEventListener("scroll", function (event) {
  if (
    document.documentElement.scrollTop + window.innerHeight ==
    document.documentElement.scrollHeight 
  ) {
    Array.from(navbarItems).map((nav) => {
      nav.classList.remove("active");
      if (nav.hash == "#contact") {
        nav.classList.add("active");
      }
    });
  }
});


function startNavBar(){
  document.getElementById("navLinks").classList.add("active");
  Array.from(document.querySelectorAll("section")).map(section=>{
    section.classList.add("blur");
  })
}
function closeNavBar(){
  document.getElementById("navLinks").classList.remove("active");
  Array.from(document.querySelectorAll("section")).map(section=>{
    section.classList.remove("blur");
  })
}