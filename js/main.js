let about = document.getElementById("about");
let experience = document.getElementById("experience");
let work = document.getElementById("work");
let contact = document.getElementById("contact");
let navbarItems = document.getElementById("navbar").getElementsByTagName("a");

window.addEventListener("scroll", (event) => {
  var scroll = this.scrollY;
  if (scroll > 400) {
    document.getElementById("navbar").classList.add("sticky");
  } else {
    document.getElementById("navbar").classList.remove("sticky");
  }
  if (
    scroll >= about.getBoundingClientRect().top &&
    scroll < experience.getBoundingClientRect().top
  ) {
    Array.from(navbarItems).map((item) => {
      if (item.hash == "#about") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  } else if (
    scroll >= experience.getBoundingClientRect().top &&
    scroll < work.getBoundingClientRect().top
  ) {
    Array.from(navbarItems).map((item) => {
      if (item.hash == "#experience") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  } else if (
    scroll >= work.getBoundingClientRect().top &&
    scroll < contact.getBoundingClientRect().top
  ) {
    Array.from(navbarItems).map((item) => {
      if (item.hash == "#work") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  } else if (scroll >= contact.getBoundingClientRect().top) {
    Array.from(navbarItems).map((item) => {
      if (item.hash == "#contact") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  } else {
    Array.from(navbarItems).map((item) => {
      item.classList.remove("active");
    });
  }
});
AOS.init();
