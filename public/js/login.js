document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();  // Prevent form reload

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                // ✅ Send login request to the server
                const response = await fetch("http://localhost:3001/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                if (response.ok) {
                    const data = await response.text();  // "Login Successful"
                    alert(data);  // Display success message

                    // ✅ Store user email in localStorage for later use
                    localStorage.setItem("currentUser", JSON.stringify({ email }));

                    // ✅ Redirect to dashboard
                    window.location.href = "dashboard.html";
                } else {
                    // Display error message if login fails
                    document.getElementById("error-msg").style.display = "block";
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to connect to server.");
            }
        });
    }
});
