/* floating background emojis */
const kawaiiItems = ["💗", "⭐", "🌸", "🎀", "✨", "🫧"];
const bg = document.getElementById("kawaii-bg");

function createKawaii() {
  const el = document.createElement("div");
  el.className = "kawaii";
  el.innerText = kawaiiItems[Math.floor(Math.random() * kawaiiItems.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = 18 + Math.random() * 22 + "px";
  el.style.animationDuration = 8 + Math.random() * 12 + "s";
  bg.appendChild(el);
  setTimeout(() => el.remove(), 20000);
}
setInterval(createKawaii, 400);

/* 🎧 music toggle */
let musicOn = false;
const bgm = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
  if (!musicOn) {
    bgm.play();
    musicBtn.classList.add("on");
  } else {
    bgm.pause();
    musicBtn.classList.remove("on");
  }
  musicOn = !musicOn;
}

/* 🌙 messages + GIFS (UPPERCASE .GIF) */
const moments = [
  {
    text: "As 2026 begins, I pray this year brings you peace in your heart, clarity in your path, and blessings beyond what you imagine 🌙✨",
    gif: "cute1.GIF"
  },
  {
    text: "Thank you for being my best friend — for the laughs, the support, and the quiet understanding 💕",
    gif: "cute2.GIF"
  },
  {
    text: "May this year be filled with answered duas, gentle moments, and growth that feels right for you 🤍",
    gif: "cute3.GIF"
  },
  {
    text: "No matter where 2026 takes us, I’m grateful for you and I’ll always be cheering for you 💖",
    gif: "cute4.GIF"
  }
];

let step = -1;
let finalReady = false;

function launchConfetti() {
  const colors = ["#ff4d4d", "#ffa64d", "#ffee4d", "#4dff88", "#4dd2ff", "#b84dff"];
  for (let i = 0; i < 70; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

function magic() {
  /* hide headphone toggle after intro */
  if (step === -1) {
    musicBtn.style.display = "none";
  }

  if (finalReady) {
    launchConfetti();
    return;
  }

  step++;

  if (step < moments.length) {
    document.getElementById("title").innerText = "Dear Manu,";
    document.getElementById("wish").innerText = moments[step].text;
    document.getElementById("kawaiiGif").src = moments[step].gif;
  } else {
    document.getElementById("title").innerText = "Happy New Year 2026";
    document.getElementById("title").classList.add("rainbow");
    document.getElementById("wish").innerText = "";
    document.getElementById("kawaiiGif").src = "final.GIF";
    document.getElementById("actionBtn").innerText = "Celebrate 🎉";
    finalReady = true;
  }
}