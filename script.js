// Ganti kode rahasia di bawah ini sesuai keinginanmu
const KODE_RAHASIA = "20.09.25"; 

function checkCode() {
    const input = document.getElementById('pass-input').value;
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');
    const errorMsg = document.getElementById('error-msg');

    if (input === KODE_RAHASIA) {
        // Efek transisi layar login ke atas
        loginScreen.style.transform = "translateY(-100%)";
        
        setTimeout(() => {
            loginScreen.style.display = "none";
            mainContent.style.display = "block";
            document.body.style.overflow = "auto";
            createBalloons(); // Jalankan animasi balon
        }, 800);
    } else {
        errorMsg.style.display = "block";
        document.getElementById('pass-input').value = "";
    }
}

// Fungsi membuat balon terbang secara acak
function createBalloons() {
    for(let i=0; i<20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDelay = Math.random() * 5 + "s";
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
        document.body.appendChild(balloon);
    }
}

// Fungsi untuk nge-zoom pesan
function zoomIn(element) {
    const overlay = document.getElementById('zoom-overlay');
    const content = document.getElementById('zoom-content');
    
    // Ambil teks dari span .full-text di dalam kotak yang diklik
    const secretMessage = element.querySelector('.full-text').innerText;
    
    content.innerText = secretMessage;
    overlay.style.display = 'flex';
}

// Fungsi untuk menutup zoom
function zoomOut() {
    const overlay = document.getElementById('zoom-overlay');
    overlay.style.display = 'none';
}

// Membuat tombol 'Enter' berfungsi untuk login
document.getElementById('pass-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkCode();
    }
});