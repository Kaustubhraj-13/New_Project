function Authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var authorized = false;
    
    if ((username == "kaustubh@gmail.com" && password == "123") || 
        (username == "K@gmail.com" && password == "pass123")) {
        authorized = true;
        localStorage.setItem('userEmail', username);
        window.location.href = 'dashboard.html';
    } else {
        showToaster("Invalid username or password. Please try again.");
    }
    return authorized;
  }

  function showToaster(message) {
    var toaster = document.getElementById("toaster");
    toaster.textContent = message;
    toaster.style.display = 'block';
    setTimeout(function() {
      toaster.style.display = 'none';
    }, 5000); 
  }