document.getElementById("imageclick").onclick = function () {
        location.href = "#";
};

function myFunction() {
  var nav = document.getElementById("myTopnav");
  var menu = document.getElementById("hamburger");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }

  menu.classList.toggle("open");
}
