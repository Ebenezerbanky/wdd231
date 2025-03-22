
        // Display the current year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Display the last modified date
        document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

function filterCourses(category) {
    const courses = document.querySelectorAll('.course-item');
    courses.forEach(course => {
      if (category === 'all' || course.classList.contains(category)) {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    });
  }

  