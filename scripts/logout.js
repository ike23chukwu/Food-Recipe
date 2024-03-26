
function logout() {

    localStorage.removeItem('authToken');


    window.location.href = 'index.html';
}

document.querySelector('.logout-link').addEventListener('click', logout);
