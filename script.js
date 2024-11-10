// Toggle Sidebar
        function toggleSidebar() {
            const sidebar = document.getElementById("sidebar");
            sidebar.classList.toggle("active");
        }

        // JavaScript for Dynamic Year in Footer
        document.getElementById("year").textContent = new Date().getFullYear();

        // DOM Manipulation - Button Click
        document.getElementById("Button").onclick = function() {
            document.getElementById("my").textContent = "You clicked the button!";
        };

        // Form Validation
        document.getElementById("registrationForm").onsubmit = function(event) {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const error = document.getElementById("errorMessage");

            if (!email || password.length < 8) {
                error.textContent = "Email cannot be empty and password must be at least 8 characters.";
                event.preventDefault();
            } else {
                error.textContent = "";
            }
        };

        // Array Output in List
        const fruits = ["apple", "banana", "mango", "grape"];
        const fruitList = document.getElementById("fruitList");
        fruits.forEach(fruit => {
            const li = document.createElement("li");
            li.textContent = fruit;
            fruitList.appendChild(li);
        });