document.getElementById('data-form').addEventListener('submit',function(event){
    event.preventDefault();
    const age=document.getElementById('age').value;
    const country=document.getElementById('country').value;
    const city=document.getElementById('city').value;
    const name=document.getElementById('name').value;

    const tableBody = document.getElementById('data-table-body');
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
    <td>${age}</td>
    <td>${country}</td>
    <td>${city}</td>
    <td>${name}</td>
    `;
    tableBody.appendChild(newRow);
    document.getElementById('data-form').reset();
});
document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutButton');
  
    if (logoutButton) {
      logoutButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        alert('Logged out!');
        window.location.href = 'login.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const userEmail = localStorage.getItem('userEmail');
    
    if (userEmail) {
        document.getElementById('loggedInEmail').textContent = `Logged in as: ${userEmail}`;
    } else {
        window.location.href = 'login.html';
    }
    
    // Handle logout
    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    });
});
