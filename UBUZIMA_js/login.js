// ================= SHOW FORMS =================
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

// ================= REGISTER =================
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("regName").value;
    let password = document.getElementById("regPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check if user exists
    let exists = users.find(u => u.name === name);

    if (exists) {
        document.getElementById("registerMsg").innerText = "User already exists!";
        return;
    }

    users.push({ name, password });
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("registerMsg").innerText = "Account created successfully!";
});

// ================= LOGIN =================
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("loginName").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.name === name && u.password === password);

    if (!user) {
        document.getElementById("loginError").innerText = "Invalid username or password!";
        return;
    }

    // Save logged user
    localStorage.setItem("loggedUser", JSON.stringify(user));

    alert("Login successful!");

    // Redirect to home page
    window.location.href = "index.html";
});