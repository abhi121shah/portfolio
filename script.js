alert("This page is under devlopment")
function toggleNav() {
  let nav = document.getElementById("sidenav");
  if (nav.style.width === "250px") {
    nav.style.width = "0";
  } else {
    nav.style.width = "250px";
  }
}
