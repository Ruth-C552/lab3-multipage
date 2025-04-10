document.addEventListener("DOMContentLoaded", function () {
  // 🌙 Theme Toggle
  const toggleBtn = document.getElementById("themeToggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });
  }

  // 📩 Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || message === "") {
        alert("Please fill out all fields.");
      } else {
        document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
        contactForm.reset();
      }
    });
  }

  // 👥 Load Users (Dynamic Data Example)
  const loadUsersBtn = document.getElementById("loadUsersBtn");
  const userList = document.getElementById("userList");
  if (loadUsersBtn && userList) {
    loadUsersBtn.addEventListener("click", async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        userList.innerHTML = "";
        users.forEach(user => {
          const li = document.createElement("li");
          li.textContent = user.name;
          userList.appendChild(li);
        });
      } catch (err) {
        console.error("Failed to load users:", err);
      }
    });
  }

  // ❓ FAQ Toggle
  document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
      q.nextElementSibling.classList.toggle("visible");
    });
  });
});

// Real-time Clock
function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
