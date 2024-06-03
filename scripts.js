document.addEventListener("DOMContentLoaded", function() {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    const content = document.querySelector(".content");
    const projects = document.querySelectorAll(".project");

    window.addEventListener("load", function() {
        setTimeout(() => {
            loaderWrapper.style.opacity = "0";
            loaderWrapper.style.transition = "opacity 1s ease-in-out";
            setTimeout(() => {
                loaderWrapper.style.display = "none";
                content.style.display = "block";
                setTimeout(() => {
                    content.style.opacity = "1";
                    animateProjects();
                }, 50);
            }, 1000);
        }, 2000);
    });

    function animateProjects() {
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.style.opacity = "1";
                project.style.transform = "translateY(0)";
            }, index * 300); // задержка между анимацией проектов
        });
    }

    // Intersection Observer API для анимации элементов при прокрутке
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    projects.forEach(project => {
        observer.observe(project);
    });
});
