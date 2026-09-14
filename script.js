
function showMessage() {
    alert("welcome to Ian Brian's website!");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
document.getElementById("contactForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let message =
            document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill all fields.");
            return;
        }

        alert(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message
        );
    })