
/* =====================================
   1. SELECTING DRUM PADS
===================================== */

const drums = document.querySelectorAll(".drum-pad");


/* =====================================
   2. DRUM SOUND CONFIGURATION
===================================== */

const drumSounds = {

    a: new Audio("kick.wav"),
    s: new Audio("snare.wav"),
    d: new Audio("hihat.wav"),
    f: new Audio("tom.wav"),
    g: new Audio("crash.wav"),
    h: new Audio("clap.wav")
   
};


/* =====================================
   3. PLAY DRUM SOUND
===================================== */

function playSound(key) {

    const sound = drumSounds[key];

    if (!sound) return;

    // Restart sound from beginning
    sound.currentTime = 0;

    sound.play().catch(error => {
        console.log("Audio playback error:", error);
    });

}


/* =====================================
   4. VISUAL DRUM ANIMATION
===================================== */

function animateDrum(key) {

    const drum = document.querySelector(
        `.drum-pad[data-key="${key}"]`
    );

    if (!drum) return;

    drum.classList.add("active");

    setTimeout(() => {
        drum.classList.remove("active");
    }, 120);

}


/* =====================================
   5. HANDLE DRUM INTERACTION
===================================== */

function playDrum(key) {

    key = key.toLowerCase();

    if (!drumSounds[key]) return;

    playSound(key);

    animateDrum(key);

}


/* =====================================
   6. KEYBOARD CONTROL
===================================== */

document.onkeydown = function(event) {

    // Ignore repeated keydown events
    if (event.repeat) return;

    const key = event.key.toLowerCase();

    playDrum(key);

};


/* =====================================
   7. MOUSE CLICK CONTROL
===================================== */

drums.forEach(drum => {

    drum.onclick = function() {

        const key = this.dataset.key;

        playDrum(key);

    };

});
