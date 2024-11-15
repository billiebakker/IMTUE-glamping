function navFunction() {
    var x = document.getElementById("main-nav-content");
    if (x.className === "main-nav-content") {
        x.className += " responsive";
    } else {
        x.className = "main-nav-content";
    }
}