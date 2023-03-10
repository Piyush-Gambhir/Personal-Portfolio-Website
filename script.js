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

var navbarlinks = document.getElementsByClassName("navbar-links");
var websitecontents = document.getElementsByClassName("website-contents");

function opensection(sectionname) {
  for (navbarlink of navbarlinks) {
    navbarlink.classList.remove("active-link");
  }

  for(websitecontent of websitecontents) {
    websitecontent.classList.remove("active-section");
  }

  document.getElementById(sectionname).classList.add("active-section");
}
