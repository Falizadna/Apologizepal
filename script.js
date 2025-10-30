const nameCard = document.getElementById('nameCard');
const apologyCard = document.getElementById('apologyCard');
const nicknameInput = document.getElementById('nickname');
const submitName = document.getElementById('submitName');
const apologyText = document.getElementById('apologyText');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');
const heartsContainer = document.getElementById('hearts');
const popupTitle = document.getElementById('popupTitle');
const popupMsg = document.getElementById('popupMsg');

let noScale = 1.0;
let yesScale = 1.0;

// Nama fix (abaikan input pengguna)
const FIXED_NAME = 'ayang nuy';

submitName.addEventListener('click', () => {
  // opsional: paksa isi input jadi 'ayang nuy' biar konsisten juga di UI
  if (nicknameInput) nicknameInput.value = FIXED_NAME;

  // tampilkan kartu minta maaf
  nameCard.style.display = 'none';
  apologyCard.style.display = 'block';

  // set judul & isi
  const apologyTitle = apologyCard.querySelector('h1');
  apologyTitle.textContent = `${FIXED_NAME}, aku minta maaf 🥺💖`;
  apologyText.innerHTML = `Aku gak bermaksud bikin kamu kesel.<br>Maafin aku, ya? 😢`;
});

// tombol “Enggak”
noBtn.addEventListener('click', () => {
  noScale = Math.max(0.3, noScale - 0.1);
  yesScale = Math.min(1.8, yesScale + 0.1);
  noBtn.style.transform = `scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;
});

// tombol “Maafin”
yesBtn.addEventListener('click', () => {
  popup.classList.add('active');
  popupTitle.textContent = `Makasih ya, ${FIXED_NAME} 💕`;
  popupMsg.textContent = `Aku janji gak bakal bikin kamu kesel lagi 🥺✨`;

  generateHearts();

  setTimeout(() => {
    popup.classList.remove('active');
    noScale = 1;
    yesScale = 1;
    noBtn.style.transform = `scale(1)`;
    yesBtn.style.transform = `scale(1)`;
  }, 5000);
});

// animasi hati
function generateHearts() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100 - 50}px`;
    heart.style.top = `${Math.random() * 40 - 20}px`;
    heart.style.animationDelay = `${Math.random() * 0.3}s`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}
