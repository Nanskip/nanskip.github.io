document.addEventListener("DOMContentLoaded", function() {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    const content = document.querySelector(".content");

    window.addEventListener("load", function() {
        setTimeout(() => {
            loaderWrapper.style.opacity = "0";
            loaderWrapper.style.transition = "opacity 1s ease-in-out";
            setTimeout(() => {
                loaderWrapper.style.display = "none";
                content.style.display = "block";
                setTimeout(() => {
                    content.style.opacity = "1";
                }, 50);
            }, 1000);
        }, 2000); // задержка загрузки для видимого эффекта
    });
});
