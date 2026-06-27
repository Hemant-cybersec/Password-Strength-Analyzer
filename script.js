function checkPassword() {

    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let scoreText = document.getElementById("score");
    let recommendations = document.getElementById("recommendations");

    let score = 0;
    let tips = [];

    if(password.length >= 8){
        score += 20;
    } else {
        tips.push("Use at least 8 characters.");
    }

    if(/[A-Z]/.test(password)){
        score += 20;
    } else {
        tips.push("Add an uppercase letter.");
    }

    if(/[a-z]/.test(password)){
        score += 20;
    } else {
        tips.push("Add a lowercase letter.");
    }

    if(/[0-9]/.test(password)){
        score += 20;
    } else {
        tips.push("Add a number.");
    }

    if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        score += 20;
    } else {
        tips.push("Add a special character.");
    }

    if(score <= 40){
        result.innerHTML = "Weak Password";
        result.style.color = "red";
    }
    else if(score <= 80){
        result.innerHTML = "Medium Password";
        result.style.color = "orange";
    }
    else{
        result.innerHTML = "Strong Password";
        result.style.color = "lime";
    }

    scoreText.innerHTML = "Security Score: " + score + "/100";
    let progressBar=
    document.getElementById("progress-bar");
    progressBar.style.width=
    score+ "%";
    if(score <= 40){
    progressBar.style.backgroundColor = "red";
}
else if(score <= 80){
    progressBar.style.backgroundColor = "orange";
}
else{
    progressBar.style.backgroundColor = "limegreen";
}
    if(tips.length > 0){
        recommendations.innerHTML =
        "<h3>Recommendations:</h3><ul><li>" +
        tips.join("</li><li>") +
        "</li></ul>";
    }
    else{
        recommendations.innerHTML =
        "<h3>Excellent Password Security!</h3>";
    }
}
function togglePassword() {
    let passwordInput = document.getElementById("password");
    let toggleBtn = document.getElementById("toggleBtn");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.innerHTML = "Hide Password";
    } else {
        passwordInput.type = "password";
        toggleBtn.innerHTML = "Show Password";
    }
}
function copyPassword() {
    let passwordInput = document.getElementById("password");

    navigator.clipboard.writeText(passwordInput.value);

    alert("Password Copied!");
}
function submitFeedback() {
    alert("Feedback Submitted Successfully!");
    document.getElementById("feedback-message").innerHTML =
    "✅ Thank you for your feedback!";
}
function generatePassword() {

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for (let i = 0; i < 12; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("password").value = password;

    checkPassword();
}
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}