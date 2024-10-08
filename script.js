function revealMessage() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    const birthdaySong = document.getElementById('birthdaySong');
    
    // Reveal hidden message
    hiddenMessage.classList.remove('hidden');
    
    // Play birthday song
    birthdaySong.play();  // Play the song when the balloon is clicked

    // Start confetti animation
    confettiAnimation();

    // Fireworks after 3 seconds
    setTimeout(() => {
        fireworksAnimation();
    }, 3000);

    // Flower shower after fireworks complete (8 seconds)
    setTimeout(() => {
        flowerShowerAnimation();
    }, 8000);

    // Reveal photos one by one with random positioning
    revealPhotos();
}

// Confetti Animation
function confettiAnimation() {
    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 35,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 35,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Fireworks Animation using confetti library
function fireworksAnimation() {
    const duration = 900;
    const end = Date.now() + duration;

    (function fire() {
        confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 160,
            ticks: 50,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(fire);
        }
    }());
}

// Flower Shower Animation (starts after fireworks)
let flowerShowerActive = false; // Flag to track flower shower state

function flowerShowerAnimation() {
    const duration = 900; // Total duration for the flower shower
    const end = Date.now() + duration;

    (function shower() {
        if (!flowerShowerActive) return; // Stop if not active

        // Replace with your confetti function for flower shower
        confetti({
            particleCount: 5,
            angle: 90,
            spread: 160,
            origin: { x: Math.random(), y: 0 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(shower);
        } else {
            flowerShowerActive = false; // Stop when the duration ends
        }
    }());
}



// // Reveal Photos One by One with Fade-In and Random Position
// function revealPhotos() {
//     const photos = document.querySelectorAll('.photo');
//     let delay = 0;
//     const displayTime = 5000; // Time each photo stays visible (3 seconds)
//     const intervalTime = 6000; // Time between each photo (4 seconds)

//     photos.forEach((photo) => {
//         setTimeout(() => {
//             const randomX = Math.random() * (window.innerWidth - 300);
//             const randomY = Math.random() * (window.innerHeight - 300);

//             photo.style.left = `${randomX}px`;
//             photo.style.top = `${randomY}px`;
            
//             photo.classList.remove('hidden');
//             photo.style.animation = `fadeInPhoto 2s ease-out forwards`;

//             setTimeout(() => {
//                 photo.style.animation = `fadeOutPhoto 2s ease-out forwards`;
//             }, displayTime); // Keeps photo for 3 seconds
//         }, delay);
        
//         delay += intervalTime; // Adjust interval between photos
//     });
// }

function revealPhotos() {
    const photos = document.querySelectorAll('.photo');
    let delay = 0;
    const displayTime = 5000; // Time each photo stays visible (5 seconds)
    const intervalTime = 6000; // Time between each photo (6 seconds)
    const topBoundary = 150; // Avoid overlapping the top section (adjust if needed)

    photos.forEach((photo) => {
        setTimeout(() => {
            // Position photos at the bottom and make them move upwards
            const randomX = Math.random() * (window.innerWidth - 300); // Random X position
            const randomY = window.innerHeight - 300; // Start from the bottom of the window

            photo.style.left = `${randomX}px`;
            photo.style.top = `${randomY}px`;
            
            // Add the fade-in and upward movement animations
            photo.classList.remove('hidden');
            photo.style.animation = `moveUpAndFadeIn 2s ease-out forwards`;

            setTimeout(() => {
                // Fade out after the display time
                photo.style.animation = `fadeOutPhoto 2s ease-out forwards`;
            }, displayTime); // Keeps photo for 5 seconds
        }, delay);
        
        delay += intervalTime; // Adjust interval between photos
    });
}


