let about = document.getElementById("about");
let experience = document.getElementById("experience");
let work = document.getElementById("work");
let contact = document.getElementById("contact");
let navbarItems = document.getElementById("navbar").getElementsByTagName("a");

window.addEventListener("scroll", (event) => {
  var scroll = this.scrollY;
  console.log(experience.getBoundingClientRect().top);
  if (scroll > 400) {
    document.getElementById("navbar").classList.add("sticky");
    document.getElementById("body").classList.add("eject");
  } else {
    document.getElementById("navbar").classList.remove("sticky");
  }
  if (-100 < about.getBoundingClientRect().top < 100) {
    Array.from(navbarItems).map((item) => {
      if (item.hash == "#about") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  } else if (-100 < experience.getBoundingClientRect().top < 100) {
    Array.from(navbarItems).map((item) => {
      if (item.hash == "#experience") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  } else if (
    scroll >= work.getClientRects().top - 300 &&
    scroll < contact.getClientRects().top
  ) {
    Array.from(navbarItems).map((item) => {
      if (item.hash == "#work") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  } else if (scroll >= contact.getClientRects().top) {
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
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 80);
  }
}

// // This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);

// // This is here so that when you enter the page with a hash,
// // it can provide the offset in that case too. Having a timeout
// // seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1);
// The delay of 1 is arbitrary and may not always work right (although it did in my testing).
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
