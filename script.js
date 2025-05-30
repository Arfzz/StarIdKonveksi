document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      duration: 800,
      once: false, // whether animation should happen only once - while scrolling down
    });
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.innerHTML = navMenu.classList.contains('active') 
          ? '<i class="fas fa-times"></i>' 
          : '<i class="fas fa-bars"></i>';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
/* JavaScript for Tab Functionality */
/* Add this to your CSS file if you're using <style> tags in your HTML */
/* Otherwise add this as a <script> tag to your HTML */
document.addEventListener('DOMContentLoaded', function() {
    // Product Detail Tabs
    const productTabBtns = document.querySelectorAll('.tab-btn');
    productTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            productTabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab panes
            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Show the selected tab pane
            const targetTab = this.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Size Chart Tabs
    const sizeTabs = document.querySelectorAll('.size-tab');
    sizeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            sizeTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all charts
            const charts = document.querySelectorAll('.chart');
            charts.forEach(chart => chart.classList.remove('active'));
            
            // Show the selected chart
            const targetChart = this.getAttribute('data-chart') + '-chart';
            document.getElementById(targetChart).classList.add('active');
        });
    });
    // Price List Tabs
    const priceTabs = document.querySelectorAll('.price-tab');
    priceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            priceTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all price tables
            const priceTables = document.querySelectorAll('.price-table');
            priceTables.forEach(table => table.classList.remove('active'));
            
            // Show the selected price table
            const targetTable = this.getAttribute('data-price') + '-price';
            document.getElementById(targetTable).classList.add('active');
        });
    });
});

const originalHeader = document.getElementById('originalHeader');
const floatingNavbar = document.getElementById('floatingNavbar');
const heroSection = document.getElementById('hero');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');


    let isHeroVisible = true; // Diasumsikan hero terlihat saat halaman dimuat
    let isFooterVisible = false; 


    
        // Intersection Observer untuk mendeteksi hero section
      const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Hero section terlihat - sembunyikan floating navbar
                    floatingNavbar.classList.remove('show');
                    originalHeader.classList.remove('hide-original');
                } else {
                    // Hero section tidak terlihat - tampilkan floating navbar
                    floatingNavbar.classList.add('show');
                    // Sembunyikan original header
                    originalHeader.classList.add('hide-original');
                }
            });
        }, {
            threshold: 0.1 // Trigger ketika 10% hero section terlihat
        });

        observer.observe(heroSection);

        
        // Smooth scroll untuk floating navbar
     document.querySelectorAll('.floating-nav-menu a, .nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const hrefValue = this.getAttribute('href');

        // Periksa apakah link adalah anchor internal (dimulai dengan #)
        if (hrefValue && hrefValue.startsWith('#')) {
            e.preventDefault(); // Hanya cegah default untuk anchor internal
            const targetSection = document.querySelector(hrefValue);
            
            if (targetSection) {
                let offsetTop = targetSection.offsetTop;
                
                // Penyesuaian offset agar tidak tertutup header/navbar
                // Anda mungkin perlu menyesuaikan nilai 80 atau 100 ini
                const originalHeader = document.getElementById('originalHeader');
                const floatingNavbar = document.getElementById('floatingNavbar');

                if (originalHeader && !originalHeader.classList.contains('hide-original')) {
                    offsetTop -= originalHeader.offsetHeight > 0 ? originalHeader.offsetHeight : 80;
                } else if (floatingNavbar && floatingNavbar.classList.contains('show')) {
                    // Jika floating navbar tidak memiliki tinggi tetap, Anda mungkin perlu
                    // cara lain untuk menghitung offset atau menggunakan nilai tetap
                    // offsetTop -= 60; // Contoh offset untuk floating navbar
                } else {
                     offsetTop -= 80; // Fallback offset
                }


                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Jika ini menu mobile, tutup setelah diklik
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }

            }
        }
        // Jika hrefValue tidak dimulai dengan '#', maka itu adalah link ke halaman lain
        // atau link eksternal. Biarkan browser menanganinya secara default (tidak memanggil e.preventDefault()).
        // Ini akan mengizinkan navigasi ke "portofolio.html".
    });
});

// Pastikan kode untuk hamburger menu dan penutupan menu mobile saat link diklik
// yang mungkin ada di bawah ini tidak mengganggu logika di atas.
// Jika ada e.preventDefault() lain pada link spesifik ke portofolio.html, itu juga perlu diperiksa.
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Kode untuk menutup menu mobile ketika link di dalamnya (yang bukan portofolio.html) diklik
// sudah tercakup dalam logika di atas jika navMenu.classList.remove('active') ada di sana.
// Jika Anda memiliki listener terpisah untuk ini, pastikan tidak ada e.preventDefault() yang berlebihan.
        // Active state untuk floating navbar
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const floatingNavItems = document.querySelectorAll('.floating-nav-item');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                if (scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            floatingNavItems.forEach(item => {
                item.classList.remove('active');
                const link = item.querySelector('a');
                if (link.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });

        // Hamburger menu toggle
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

         const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const successMessage = document.getElementById('successMessage');

        // Validation functions
        function validateName(name) {
            return name.trim().length >= 2;
        }

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validatePhone(phone) {
            if (phone.trim() === '') return true; // Optional field
            const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
            return phoneRegex.test(phone.replace(/[\s-]/g, ''));
        }

        function validateMessage(message) {
            return message.trim().length >= 10;
        }

        // Real-time validation
        function addFieldValidation(fieldId, validationFn, errorId) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(errorId);

            field.addEventListener('blur', function() {
                const isValid = validationFn(this.value);
                
                if (isValid) {
                    this.classList.remove('error');
                    this.classList.add('success');
                    errorElement.classList.remove('show');
                } else {
                    this.classList.remove('success');
                    this.classList.add('error');
                    errorElement.classList.add('show');
                }
            });

            field.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    const isValid = validationFn(this.value);
                    if (isValid) {
                        this.classList.remove('error');
                        this.classList.add('success');
                        errorElement.classList.remove('show');
                    }
                }
            });
        }

        // Add validation to all fields
        addFieldValidation('fullName', validateName, 'fullNameError');
        addFieldValidation('email', validateEmail, 'emailError');
        addFieldValidation('phone', validatePhone, 'phoneError');
        addFieldValidation('message', validateMessage, 'messageError');

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validate all fields
            const isNameValid = validateName(fullName);
            const isEmailValid = validateEmail(email);
            const isPhoneValid = validatePhone(phone);
            const isMessageValid = validateMessage(message);

            // Update UI for each field
            const fields = [
                { id: 'fullName', valid: isNameValid, errorId: 'fullNameError' },
                { id: 'email', valid: isEmailValid, errorId: 'emailError' },
                { id: 'phone', valid: isPhoneValid, errorId: 'phoneError' },
                { id: 'message', valid: isMessageValid, errorId: 'messageError' }
            ];

            let allValid = true;

            fields.forEach(field => {
                const element = document.getElementById(field.id);
                const errorElement = document.getElementById(field.errorId);

                if (field.valid) {
                    element.classList.remove('error');
                    element.classList.add('success');
                    errorElement.classList.remove('show');
                } else {
                    element.classList.remove('success');
                    element.classList.add('error');
                    errorElement.classList.add('show');
                    allValid = false;
                }
            });

            if (allValid) {
                // Simulate form submission
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';

                setTimeout(() => {
                    // Show success message
                    successMessage.classList.add('show');
                    
                    // Reset form
                    form.reset();
                    
                    // Remove all validation classes
                    document.querySelectorAll('.form-control').forEach(field => {
                        field.classList.remove('success', 'error');
                    });
                    
                    // Hide error messages
                    document.querySelectorAll('.error-message').forEach(error => {
                        error.classList.remove('show');
                    });

                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.remove('show');
                    }, 5000);
                }, 1500);
            }
        });
