document.addEventListener("DOMContentLoaded", function () {
    const usernameSpan = document.getElementById('username');
    const emailSpan = document.getElementById('email');

    fetchUserInfo();

    function fetchUserInfo() {

        const user = {
            username: 'JohnDoe',
            email: 'john@example.com'

        };

        usernameSpan.textContent = user.username;
        emailSpan.textContent = user.email;

    }


    const editProfileButton = document.getElementById('edit-profile-button');
    editProfileButton.addEventListener('click', function () {

        window.location.href = 'edit-profile.html';
    });
});
