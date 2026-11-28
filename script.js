var sections = document.querySelectorAll("main section");
var indicator = document.getElementById("indicator");

function updateIndicator() {
  var current = sections[0];
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top <= 150) {
      current = sections[i];
    }
  }
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    current = sections[sections.length - 1];
  }
  var heading = current.querySelector("h2") || current.querySelector("h1");
  indicator.textContent = "Now viewing: " + heading.textContent;
}

window.addEventListener("scroll", updateIndicator);
updateIndicator();
var toggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");

if (toggle && menu) {
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}
