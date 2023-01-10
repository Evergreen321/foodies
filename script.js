"use strict";

// DYNAMIC COPYRIGHT TEXT
const copyright = document.querySelector(".copyright-text");
const currentYear = new Date().getFullYear();

copyright.textContent = `Copyright \u00A9 ${currentYear} Foodies.`;

// HAMBURGER MENU
const menu = document.querySelector(".main-nav-list");
const menuItems = document.querySelectorAll(".main-nav-link");
const headerEl = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    headerEl.classList.toggle("nav-open");
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    headerEl.classList.toggle("nav-open");
  }
}

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
hamburger.addEventListener("click", toggleMenu);

// EMAIL INPUT CLEANUP
const emailInput = document.querySelector(".email-input");
const submitBtn = document.querySelector(".f-btn-subscribe");

submitBtn.addEventListener("click", submitBtnOnClick);

function submitBtnOnClick(e) {
  e.preventDefault();
  emailInput.value = "";
}
