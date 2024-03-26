document.addEventListener("DOMContentLoaded", function () {
    const editProfileForm = document.getElementById("edit-profile-form");

    editProfileForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve updated profile information
        const updatedUsername = document.getElementById("username").value;
        const updatedEmail = document.getElementById("email").value;
        const updatedBio = document.getElementById("bio").value;

        // Perform any necessary validation

        // Simulate saving changes by logging the updated profile information
        console.log("Updated Username:", updatedUsername);
        console.log("Updated Email:", updatedEmail);
        console.log("Updated Bio:", updatedBio);

        // Optionally, you can send the updated information to the server for storage
        // You can use fetch or other methods to make an HTTP request to your backend API
        // Example:
        // fetch("https://example.com/api/updateProfile", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         username: updatedUsername,
        //         email: updatedEmail,
        //         bio: updatedBio
        //     })
        // })
        // .then(response => {
        //     if (response.ok) {
        //         console.log("Profile updated successfully!");
        //     } else {
        //         console.error("Failed to update profile:", response.statusText);
        //     }
        // })
        // .catch(error => {
        //     console.error("Error updating profile:", error);
        // });
    });
});
