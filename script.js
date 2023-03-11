// Description: This file contains the JavaScript code for the website.

// This function is used to open the section of the website that is clicked on the navbar.
var navbarlinks = document.getElementsByClassName("navbar-links");
var websitecontents = document.getElementsByClassName("website-contents");

function opensection(sectionname) {
  for (navbarlink of navbarlinks) {
    navbarlink.classList.remove("active-link");
  }

  for (websitecontent of websitecontents) {
    websitecontent.classList.remove("active-section");
  }

  document.getElementById(sectionname).classList.add("active-section");
}

// This function is used to open the tab of the website that is clicked on the navbar.
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-content");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-content");
}

// This function is used to open the side menu of the website.
var sidemenu = document.getElementById("side-menu");
var sidemenubutton = document.getElementById("open-menu-icon");

function openmenu() {
  sidemenu.style.right = "0%";
  sidemenubutton.style.display = "none";
}

function closemenu() {
  sidemenu.style.right = "-50%";
  sidemenubutton.style.display = "block";
}
