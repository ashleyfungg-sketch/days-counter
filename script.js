document.addEventListener('DOMContentLoaded', () => {
    const daysCounter = document.getElementById('days-counter');

    const startDate = new Date('2024-04-06');
    const today = new Date();
    const timeDifference = today - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    daysCounter.textContent = daysDifference;
});
