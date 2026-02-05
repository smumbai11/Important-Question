const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const music = document.getElementById("bgMusic");
const card = document.getElementById("card");

const noTexts = [
  "NO 🙈",
  "Are you sure? 😳",
  "Think again 🥺",
  "Still no? 😭",
  "Okay this is rude 😤"
];

let noCount = 0;

/* NO button runs away + changes text */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 140);
  const y = Math.random() * (window.innerHeight - 140);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  noBtn.innerText = noTexts[noCount % noTexts.length];
  noCount++;
});

/* YES clicked */
yesBtn.addEventListener("click", () => {
  music.volume = 0.3;
  music.play();

  card.innerHTML = `
    <h1>YAY Aditi 🥹💖</h1>
    <p>
      This made me ridiculously happy.<br><br>
      <strong>You’re officially my Valentine 💕</strong><br><br>
      Just for you ✨
    </p>
    <p style="font-size:14px;">
      Screenshot this so I can smile again later 📸💖
    </p>
    <p style="font-size:12px; opacity:0.7;">
      (psst… double-click anywhere 😉)
    </p>
  `;

  magic();
  confetti();
  secret();
});

/* hearts + flowers + sparkles */
function magic() {
  const emojis = ["💖", "🌸", "✨", "💕"];
  for (let i = 0; i < 45; i++) {
    const el = document.createElement("div");
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "100vh";
    el.style.fontSize = "26px";
    document.body.appendChild(el);

    el.animate(
      [
        { transform: "translateY(0)", opacity: 1 },
        { transform: "translateY(-110vh)", opacity: 0 }
      ],
      { duration: 2800, easing: "ease-out" }
    );

    setTimeout(() => el.remove(), 2800);
  }
}

/* confetti burst */
function confetti() {
  const emojis = ["🎉", "💖", "✨", "💕", "🌸"];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    c.style.position = "fixed";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-10px";
    c.style.fontSize = "22px";
    document.body.appendChild(c);

    c.animate(
      [
        { transform: "translateY(0)", opacity: 1 },
        { transform: "translateY(110vh)", opacity: 0 }
      ],
      { duration: 2600, easing: "ease-in" }
    );

    setTimeout(() => c.remove(), 2600);
  }
}

/* secret double-click */
function secret() {
  document.body.ondblclick = () => {
    alert("Okay fine… you’re my favorite person now 💕😌");
  };
}
