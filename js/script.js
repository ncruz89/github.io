const header = document.querySelector(".main-header");
const hamburger = document.querySelector(".hamburger");
const hamBox = document.querySelectorAll(".ham-box");
const sidebar = document.querySelector(".sidebar-container");
const blurbar = document.querySelector(".blur");
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");
const sideBarLinks = document.querySelector(".side-bar-nav-list");
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

// Variables
let lastScrollTop = 71;

window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    header.style.backgroundColor = "rgba(85, 85, 85, 0.50)";
    header.style.backdropFilter = "blur(5px)";
  }
  if (scrollTop === 0) {
    header.style.backgroundColor = "#3d3d3d";
    header.style.backdropFilter = "none";
  }
  if (scrollTop > lastScrollTop) header.style.top = "-71px";
  else header.style.top = "0";
  lastScrollTop = scrollTop;
});

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) closeNav();
  else openNav();
  hamburger.classList.toggle("active");
  hamBox.forEach((box) => {
    box.classList.toggle("change");
  });
});

sideBarLinks.addEventListener("click", (e) => {
  if (e.target.className === "sidebar-item") {
    closeNav();
    hamburger.classList.toggle("active");
    hamBox.forEach((box) => {
      box.classList.toggle("change");
    });
  }
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

function openNav() {
  sidebar.style.width = "60%";
  blurbar.style.width = "40%";
  document.body.style.overflowY = "hidden";
}

function closeNav() {
  sidebar.style.width = "0";
  blurbar.style.width = "0";
  document.body.style.overflowY = "visible";
}
