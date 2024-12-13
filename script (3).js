document.addEventListener('DOMContentLoaded', () => {
    const meowMusic = document.getElementById('meowMusic');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const response = document.getElementById('response');

    // Play the meow music
    meowMusic.play();

    // Add event listener for the Yes button
    yesButton.addEventListener('click', () => {
        response.textContent = "Okay cutie, see yaa!";
        response.classList.remove('hidden');
        yesButton.disabled = true;
        noButton.disabled = true;
    });

    // Add event listener for the No button
    noButton.addEventListener('click', () => {
        // Shift the No button's position
        const randomX = Math.random() * 200 - 100; // Random X position
        const randomY = Math.random() * 200 - 100; // Random Y position
        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
});