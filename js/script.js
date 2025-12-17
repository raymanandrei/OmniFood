"use strict";

////////////////////////////////////////////
// Mobile menu
////////////////////////////////////////////

const btn_mobile = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btn_mobile.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

////////////////////////////////////////////
// Fixing scroll on Safari
////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    else if (href !== "#" && href.startsWith("#")) {
      //my solution
      //const position = document.querySelector(href).offsetTop;
      // window.scrollTo({
      //   top: position,
      //   behavior: "smooth",
      // });

      //course solution

      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

//////////////////////////////////////////
// sticky header
//////////////////////////////////////////

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHero);
