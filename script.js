// This gets the mobile menu button
const menuToggle = document.querySelector(".menu-toggle");

// This gets the navigation links container
const navLinks = document.querySelector(".nav-links");

// This checks that both elements exist before running the menu code
if (menuToggle && navLinks) {
  // This listens for a click on the menu button
  menuToggle.addEventListener("click", () => {
    // This adds or removes the open class and stores the result
    const isOpen = navLinks.classList.toggle("is-open");

    // This updates aria-expanded so accessibility tools know if the menu is open
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// This gets the current page path from the browser
const path = window.location.pathname;

// This gets just the file name from the path, or uses index.html as a fallback
const currentPage = path.substring(path.lastIndexOf("/") + 1) || "index.html";

// This goes through every navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  // This gets the href value from each link
  const href = link.getAttribute("href");

  // This checks if the link matches the current page
  if (href === currentPage || (currentPage === "index.html" && href === "index.html")) {
    // This adds the active class to the current page link
    link.classList.add("active");

    // This tells accessibility tools that this is the current page
    link.setAttribute("aria-current", "page");
  }
});