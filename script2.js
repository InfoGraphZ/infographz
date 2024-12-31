//hamburger in header
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('show');
});






function filterProjects() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const projectItems = document.querySelectorAll(".course-item");

    projectItems.forEach(item => {
        const projectName = item.querySelector("h3").textContent.toLowerCase();
        const projectDomain = item.querySelector(".projectdomain").textContent.toLowerCase();

        if (projectName.includes(searchInput) || projectDomain.includes(searchInput)) {
            item.style.display = "block"; // Show item
        } else {
            item.style.display = "none"; // Hide item
        }
    });
}