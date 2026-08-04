function signup() {
    let username = document.getElementById("newUser").value.trim();
    let password = document.getElementById("newPass").value.trim();
    let msg = document.getElementById("msg");

    if (!username || !password) {
        msg.innerText = "Please fill all fields!";
        return;
    }

    // Load users list
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    let exists = users.some(u => u.username === username);

    if (exists) {
        msg.innerText = "Username already taken!";
        return;
    }

    // Add new user
    users.push({ username, password });

    localStorage.setItem("users", JSON.stringify(users));

    msg.style.color = "green";
    msg.innerText = "Account created! Redirecting to login...";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
}
