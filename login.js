 function login() {
    let username = document.getElementById("user").value.trim();
    let password = document.getElementById("pass").value.trim();

    let msg = document.getElementById("msg");

    // Load registered users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check each user
    let found = users.find(u => u.username === username && u.password === password);

    if (found) {
        localStorage.setItem("loggedIn", username);

        window.location.href = "quiz.html";
    } else {
        msg.innerText = "Invalid username or password!";
    }
}
