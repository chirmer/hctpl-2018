// Main menu show & hide

function menuMainShow() {
    var x = document.getElementById("menu-main");
    var y = document.getElementById("btn-menu-main");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
    if (x.style.display === "flex") {
        y.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    } else {
        y.style.backgroundColor = "#3155a4";
    }
}
