document.addEventListener('DOMContentLoaded', function() {
    
    alert("Selamat datang di website resmi SMA Negeri 1 Terang Bulan!");
    
    function updateDigitalClock() {
        const clockElement = document.getElementById('digital-clock');
        if (clockElement) { 
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
    setInterval(updateDigitalClock, 1000);
    updateDigitalClock();

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        console.log('Form kontak ditemukan dan event listener dipasang.');
        
        contactForm.addEventListener('submit', function(event) {
            console.log('Form disubmit, memulai validasi...');
            
            const nameInput = document.getElementById('nama');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('pesan');

            nameInput.style.borderColor = '';
            emailInput.style.borderColor = '';
            messageInput.style.borderColor = '';

            let isValid = true;

            if (!nameInput || nameInput.value.trim() === '') {
                alert('Nama tidak boleh kosong!');
                nameInput.style.borderColor = 'red';
                event.preventDefault();
                isValid = false;
                return false;
            }

            if (!emailInput || emailInput.value.trim() === '') {
                alert('Email tidak boleh kosong!');
                emailInput.style.borderColor = 'red';
                event.preventDefault();
                isValid = false;
                return false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                alert('Format email tidak valid! Contoh: example@email.com');
                emailInput.style.borderColor = 'red';
                event.preventDefault();
                isValid = false;
                return false;
            }

            if (!messageInput || messageInput.value.trim() === '') {
                alert('Pesan tidak boleh kosong!');
                messageInput.style.borderColor = 'red';
                event.preventDefault();
                isValid = false;
                return false;
            }

            if (isValid) {
                alert('Pesan Anda berhasil dikirim! Terima kasih.');
                console.log('Validasi sukses!');
            }
        });
    } else {
        console.error('Form kontak tidak ditemukan!');
    }
});
