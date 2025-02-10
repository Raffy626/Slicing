function updateCountdown() {
    const now = new Date();
    document.getElementById("days").textContent = now.getDate();
    document.getElementById("hours").textContent = now.getHours();
    document.getElementById("minutes").textContent = now.getMinutes();
    document.getElementById("seconds").textContent = now.getSeconds();
}
setInterval(updateCountdown, 1000);

const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });