// Fungsi untuk memuat animasi saat elemen muncul di layar
function animateOnScroll() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi pertama
            }
        });
    }, {
        threshold: 0.3 // Elemen akan terdeteksi saat 30% dari bagiannya terlihat
    });

    sections.forEach(section => {
        section.classList.add('hidden'); // Tambahkan kelas 'hidden' sebagai status awal
        observer.observe(section);
    });
}

// Efek hover untuk proyek
function projectHoverEffect() {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'scale(1.05)';
            project.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.7)';
        });

        project.addEventListener('mouseleave', () => {
            project.style.transform = 'scale(1)';
            project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
    });
}

// Inisialisasi semua fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    projectHoverEffect();
});

// Efek ketik otomatis pada hero section
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Kecepatan mengetik
        }
    }
    typeWriter();
}

// Fungsi untuk menyembunyikan preloader
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Tambahkan jeda waktu agar animasi loading terlihat
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Hapus elemen preloader dari DOM setelah transisi selesai
            preloader.addEventListener('transitionend', () => {
                preloader.remove();
            });
        }, 1000); // Jeda 1.5 detik
    }
}

// Panggil fungsi hidePreloader saat semua aset (gambar, CSS, JS) selesai dimuat
window.addEventListener('load', hidePreloader);

// --- Efek Kursor ---
const cursorDot = document.querySelector('.cursor-dot');

// Fungsi untuk memperbarui posisi lingkaran mengikuti kursor
window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
});

// Memberikan efek visual tambahan saat mouse masuk ke elemen yang bisa diklik
const interactiveElements = document.querySelectorAll('a, button, .project-card, .soft-skills li, .skill-item');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorDot.classList.add('active'); // Tambahkan kelas 'active'
    });
    element.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('active'); // Hapus kelas 'active'
    });
});
