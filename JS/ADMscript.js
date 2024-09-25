const nav__items = document.querySelectorAll("a.nav__item");
function ActiveLink() {
  nav__items.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
nav__items.forEach((item) => {
  item.addEventListener("click", ActiveLink);
});
// —-------------------------------------------------------------------------
// —-------------------------------------------------------------------------

// —-------------------------------------------------------------------------
// —-------------------------------------------------------------------------

// Get elements
const modal = document.getElementById("taskModal");
const addTaskBtns = document.querySelectorAll(".add-task-btn");
const closeBtn = document.querySelector(".close-btn");
const saveTaskBtn = document.getElementById("saveTaskBtn");

// Open modal on "Add Task" button click
addTaskBtns.forEach((btn) => {
  btn.onclick = function () {
    modal.style.display = "block";
  };
});

// Close modal on 'x' click
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Save the new task and update the task section
saveTaskBtn.onclick = function () {
  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDate = document.getElementById("taskDate").value;
  const taskPriority = document.getElementById("taskPriority").value;

  if (taskName && taskDate) {
    // Create a new task item
    const newTaskItem = document.createElement("div");
    newTaskItem.classList.add("task-item");
    newTaskItem.innerHTML = `
        <div class="task-info">
          <p>${taskName}</p>
          <p>${taskDescription}</p>
        </div>
        <div class="priority">
          <div class="priority-flag ${taskPriority}"></div>
          <p>${taskDate}</p>
        </div>
      `;

    // Append the new task to the Upcoming section (or any section you like)
    const taskSection = document.querySelector(
      ".task-status h3:contains('Upcoming')"
    ).parentElement;
    taskSection.insertBefore(
      newTaskItem,
      taskSection.querySelector(".add-task-btn")
    );

    // Close the modal
    modal.style.display = "none";

    // Clear input fields
    document.getElementById("taskName").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskPriority").value = "green";
  } else {
    alert("Please fill in all required fields.");
  }
};

<!-- this js script adds dynamicity to the page -->
    // <script>
        function showPage(pageId) {
            // Hide all page content
            const pages = document.querySelectorAll(".page-content");
            pages.forEach((page) => (page.style.display = "none"));

            // Show the selected page content
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.style.display = "block";
            }

            // Update the active class on navigation items
            const navItems = document.querySelectorAll(".nav__item");
            navItems.forEach((item) => item.classList.remove("active"));

            const activeItem = document.querySelector(
                `[onclick="showPage('${pageId}')"]`
            );
            if (activeItem) {
                activeItem.classList.add("active");
            }
        }

        // Show the Home page by default when the page loads
        document.addEventListener("DOMContentLoaded", () => {
            showPage("home");
        });
    // </script>
