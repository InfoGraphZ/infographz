// Filter Button Logic
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseItems = document.querySelectorAll('.course-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and set aria-pressed to false
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });

            // Add 'active' class to clicked button and set aria-pressed to true
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');

            const category = button.textContent;

            // Show only items matching the selected category
            courseItems.forEach(item => {
                if (item.getAttribute('data-category') === category || category === 'All') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// FAQ Toggle Logic
function toggleAnswer(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle("active");
}



