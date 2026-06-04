// HTML elements ko select kiya
const inputName = document.getElementById('inputName');
const inputTrade = document.getElementById('inputTrade');
const inputRoll = document.getElementById('inputRoll');
const inputSession = document.getElementById('inputSession');
const inputBlood = document.getElementById('inputBlood');

const cardName = document.getElementById('cardName');
const cardTrade = document.getElementById('cardTrade');
const cardRoll = document.getElementById('cardRoll');
const cardSession = document.getElementById('cardSession');
const cardBlood = document.getElementById('cardBlood');
const qrCodeImg = document.getElementById('qrCode');

// Card ke data aur QR Code ko update karne wala function
function updateCard() {
    // 1. Text Details badlein
    cardName.innerText = inputName.value || "---";
    cardTrade.innerText = inputTrade.value;
    cardRoll.innerText = inputRoll.value || "---";
    cardSession.innerText = inputSession.value || "---";
    cardBlood.innerText = inputBlood.value || "---";

    // 2. QR Code ke liye text data taiyar karein
    const qrData = `Name:${inputName.value},Roll:${inputRoll.value},Trade:${inputTrade.value}`;
    
    // 3. Google/Global QR API ka use karke live QR image src badlein
    // encodeURIComponent ka use kiya taaki spaces aur special characters automatic handle ho sakein
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(qrData)}`;
}

// Form ke sabhi inputs par 'input' listener lagaya taaki type karte hi live change dikhe
inputName.addEventListener('input', updateCard);
inputTrade.addEventListener('change', updateCard);
inputRoll.addEventListener('input', updateCard);
inputSession.addEventListener('input', updateCard);
inputBlood.addEventListener('input', updateCard);
// Photo input aur image element ko select kiya
const inputPhoto = document.getElementById('inputPhoto');
const studentImg = document.getElementById('studentImg');

// Jab user photo select karega, toh yeh function chalega
inputPhoto.addEventListener('change', function() {
    const file = this.files[0]; // User ne jo file select ki
    
    if (file) {
        const reader = new FileReader(); // File ko padhne ke liye reader
        
        reader.addEventListener('load', function() {
            // Photo ka data milte hi use card ki image par laga do
            studentImg.setAttribute('src', this.result);
        });
        
        reader.readAsDataURL(file); // File ko read karna shuru karo
    }
});
