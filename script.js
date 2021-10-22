// Look for the audio object that match the key code pressed, and play the sound
function audioPlay(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return; // If there is no audio object, end the function
  audio.currentTime = 0; // Restart the audio
  audio.play();
}

// Add a class for 200ms for playing animation
function drumAnimation(e) {
  const drumBox = document.querySelector(`.drum[data-key="${e.keyCode}"]`)
  drumBox.classList.add('playing')
  this.setTimeout(() => {
    drumBox.classList.remove('playing')
  }, 200);
}

window.addEventListener('keydown', function(e) {
  audioPlay(e)
  drumAnimation(e)
});