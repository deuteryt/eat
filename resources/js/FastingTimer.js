document.addEventListener("DOMContentLoaded", () => {
    function updateTime() {
        const startDate = new Date(timeLastMealFromDB);
        const now = new Date();
        const elapsed = now - startDate;

        if (elapsed < 0) {
            document.getElementById('timer').textContent = "Data jeszcze nie nadeszła!";
            return;
        }

        const seconds = Math.floor((elapsed / 1000) % 60);
        const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
        const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

        let timeString = '';

        if (days > 0) {
            timeString += `${days} days, `;
        }
        if (days > 0 || hours > 0) { 
            timeString += `${hours} hours, `;
        }
        if (days > 0 || hours > 0 || minutes > 0) { 
            timeString += `${minutes} minutes `;
        }

        document.getElementById('timer').textContent = timeString;
        document.getElementById('timer').style.fontWeight = "bold";
    }

    setInterval(updateTime, 60000);
    updateTime();
});