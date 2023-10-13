// Gather together all elements into an array
const soundButtons = document.querySelectorAll('.sound-button');

// Add in an event listener for when a button is clicked
soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        const soundId = button.getAttribute('data-sound');
        const sound = document.getElementById(soundId);
        sound.play();
    });
});

// Add in an event listener for when a key is pressed
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const soundButton = document.querySelector(`.sound-button[data-sound="${key}"]`);
    
// An if loop to check the key pressed against the key stored against each sound    
    if (soundButton) {
        const soundId = soundButton.getAttribute('data-sound');
        const sound = document.getElementById(soundId);
        sound.play();
    }
});





