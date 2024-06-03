document.addEventListener("DOMContentLoaded", function() {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    const content = document.querySelector(".content");
    const projects = document.querySelectorAll(".project");

    // Показываем контент, скрываем loaderWrapper
    content.style.display = "block";
    content.style.opacity = "1";

    window.addEventListener("load", function() {
        setTimeout(() => {
            loaderWrapper.style.transition = "opacity 0.5s ease-in-out"; // Уменьшаем продолжительность анимации
            loaderWrapper.style.opacity = "0";
            setTimeout(() => {
                loaderWrapper.style.display = "none";
                animateProjects();
            }, 500); // Уменьшаем продолжительность ожидания перед скрытием loaderWrapper
        }, 1000); // Уменьшаем общую продолжительность ожидания после загрузки
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
