const params = new URLSearchParams(window.location.search);
const answer = params.get("answer");
const headline = document.getElementById("headline");
const bgMusic = document.getElementById("bgMusic");
const voiceTrack = document.getElementById("voiceTrack");
/* Heading */ if (headline) {
  if (answer === "yes") {
    headline.innerText = "Okay So Revise All The 7 Wonders ✨";
  } else {
    headline.innerText = "Okay Then I Got You Covered 🌸";
  }
}
/* Flip Normal Cards */ function flipCard(card, event) {
  card.classList.toggle("flipped");
  launchFirework(event);
}

function voiceWonder(card,event){

  card.classList.toggle("flipped");

  launchFirework(event);

  /* IF VOICE IS ALREADY PLAYING */
  if(!voiceTrack.paused){

    voiceTrack.pause();
    voiceTrack.currentTime = 0;

    bgMusic.play();

    return;
  }

  /* OTHERWISE PLAY VOICE */
  bgMusic.pause();

  voiceTrack.currentTime = 0;

  voiceTrack.play();

}

/* Final Page */ function goFinal() {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "final.html";
  }, 700);
}
/* Fireworks */ function launchFirework(event) {
  const colors = ["#ff4d6d", "#ffffff", "#d6bcfa", "#e9d8fd", "#ffd6e0"];
  for (let i = 0; i < 25; i++) {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = event.clientX + "px";
    firework.style.top = event.clientY + "px";
    firework.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 300;
    firework.animate(
      [
        { transform: "translate(0,0) scale(1)", opacity: 1 },
        { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 },
      ],
      { duration: 1000, easing: "ease-out" },
    );
    document.body.appendChild(firework);
    setTimeout(() => {
      firework.remove();
    }, 1000);
  }
}
