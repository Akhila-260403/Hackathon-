function includeNavbar() {
    const header = document.querySelector("header");


    fetch("./navBar.html")
        .then((response) => response.text())
        .then((navbarHtml) => {
            header.innerHTML = navbarHtml;
        })
        .catch((error) => {
            console.error("Error loading navigation bar:", error);
        });
}
includeNavbar();