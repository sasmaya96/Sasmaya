document.addEventListener("DOMContentLoaded", () => {
    // Cek status dark mode dari localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    document.querySelector(".toggle-theme").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Simpan status dark mode di localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    document.querySelector(".menu-toggle").addEventListener("click", () => {
        document.querySelector(".sidebar").classList.toggle("active");
    });
});