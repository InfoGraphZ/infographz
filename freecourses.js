function filterCourses() {
    let searchInput = document.getElementById('search').value.toLowerCase();
    let categoryFilter = document.getElementById('category').value;
    let courses = document.getElementsByClassName('course-card');

    for (let course of courses) {
        let courseTitle = course.getElementsByClassName('course-title')[0].textContent.toLowerCase();
        let courseCategory = course.getAttribute('data-category');

        let matchesSearch = courseTitle.includes(searchInput);
        let matchesCategory = categoryFilter === "" || courseCategory === categoryFilter;

        if (matchesSearch && matchesCategory) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    }
}



