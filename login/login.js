document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error");

  if (username === "admin" && password === "admin") {
    alert("Login successful!");
    
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
