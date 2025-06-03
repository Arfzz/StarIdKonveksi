document.addEventListener('DOMContentLoaded', function () {
    // --------------------------------------------------------------------------------
    // 0. INISIALISASI AOS (Jika digunakan)
    // --------------------------------------------------------------------------------
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: false,
        });
    }

    // Di dalam script.js, idealnya di dalam event listener DOMContentLoaded

const priceListData = { // Objek JSON yang sudah kita buat sebelumnya
  "priceList": [
    {
      "id": "seragam",
      "tabTitle": "Seragam",
      "tabIcon": "fas fa-user-tie",
      "tableTitle": "PDH, PDL, & Jas",
      "categories": [
        {
          "name": "American Drill",
          "items": [
            {"quantity": "5-11 pcs", "price": "IDR 150K", "description": "Max. 4 titik bordir<br>1 warna (tanpa kombinasi)"},
            {"quantity": "12-50 pcs", "price": "IDR 140K", "description": "Max. 4 titik bordir<br>1 warna (tanpa kombinasi)"},
            {"quantity": "51-100 pcs", "price": "IDR 135K", "description": "Max. 4 titik bordir<br>1 warna (tanpa kombinasi)"},
            {"quantity": "101-150 pcs", "price": "IDR 130K", "description": "Max. 4 titik bordir<br>1 warna (tanpa kombinasi)"},
            {"quantity": "> 150 pcs", "price": "Diskusi lebih lanjut", "description": "Max. 4 titik bordir<br>1 warna (tanpa kombinasi)"}
          ]
        },
        {
          "name": "Japan Drill",
          "items": [
            {"quantity": "5-11 pcs", "price": "IDR 155K", "description": "Max. 4 titik bordir<br>1 warna (tanpa kombinasi)"},
            {"quantity": "12-50 pcs", "price": "IDR 150K", "description": "Max. 4 titik bordir<br>1 warna (tanpa kombinasi)"},
            {"quantity": "51-100 pcs", "price": "IDR 145K", "description": "Max. 4 titik bordir<br>1 warna (tanpa kombinasi)"},
            {"quantity": "101-150 pcs", "price": "IDR 135K", "description": "Max. 4 titik bordir<br>1 warna (tanpa kombinasi)"},
            {"quantity": "> 150 pcs", "price": "Diskusi lebih lanjut", "description": "Max. 4 titik bordir<br>1 warna (tanpa kombinasi)"}
          ]
        }
      ],
      "note": "Juga tersedia dengan bahan Nagata Drill. Hubungi kami untuk informasi lebih lanjut.",
      "noteIcon": "fas fa-info-circle"
    },
    {
      "id": "jaket",
      "tabTitle": "Jaket & Sweater",
      "tabIcon": "fas fa-tshirt", // Ikon asli adalah fas fa-user-tag, saya ganti agar lebih relevan
      "tableTitle": "Jaket & Sweater",
      "categories": [
        {
          "name": "Canva, Fleece, Taslan, Ripstok",
          "items": [
            {"quantity": "12-23 pcs", "price": "IDR 200K", "description": "Maks. 4 titik bordir"},
            {"quantity": "24-50 pcs", "price": "IDR 190K", "description": "Maks. 4 titik bordir"},
            {"quantity": "51-110 pcs", "price": "IDR 185K", "description": "Maks. 4 titik bordir"},
            {"quantity": "> 110 pcs", "price": "IDR 180K", "description": "Maks. 4 titik bordir"}
          ]
        },
        {
          "name": "Drill",
          "items": [
            {"quantity": "12-23 pcs", "price": "IDR 180K", "description": "Maks. 4 titik bordir"},
            {"quantity": "24-50 pcs", "price": "IDR 170K", "description": "Maks. 4 titik bordir"},
            {"quantity": "51-110 pcs", "price": "IDR 165K", "description": "Maks. 4 titik bordir"},
            {"quantity": "> 110 pcs", "price": "IDR 160K", "description": "Maks. 4 titik bordir"}
          ]
        }
      ],
      "note": null
    },
    {
      "id": "kaos",
      "tabTitle": "Kaos & Polo",
      "tabIcon": "fas fa-tshirt", // Ikon asli adalah fas fa-shirt, saya ganti agar lebih relevan
      "tableTitle": "Kaos & Polo",
      "categories": [
        {
          "name": "Cotton Combed 24s",
          "items": [
            {"quantity": "12-50 pcs", "price": "IDR 75K", "description": "Plastisol/DTF"},
            {"quantity": "51-110 pcs", "price": "IDR 70K", "description": "Plastisol/DTF"},
            {"quantity": "111-200 pcs", "price": "IDR 68K", "description": "Plastisol/DTF"},
            {"quantity": "> 200 pcs", "price": "IDR 65K", "description": "Plastisol/DTF"}
          ]
        },
        {
          "name": "Cotton Combed 30s",
          "items": [
            {"quantity": "12-50 pcs", "price": "IDR 70K", "description": "Plastisol/DTF"},
            {"quantity": "51-110 pcs", "price": "IDR 65K", "description": "Plastisol/DTF"},
            {"quantity": "111-200 pcs", "price": "IDR 63K", "description": "Plastisol/DTF"},
            {"quantity": "> 200 pcs", "price": "IDR 60K", "description": "Plastisol/DTF"}
          ]
        },
        {
          "name": "Polo Lacoste PE",
          "items": [
            {"quantity": "12-23 pcs", "price": "IDR 75K", "description": "Maks. 4 titik bordir"},
            {"quantity": "24-50 pcs", "price": "IDR 70K", "description": "Maks. 4 titik bordir"},
            {"quantity": "51-110 pcs", "price": "IDR 68K", "description": "Maks. 4 titik bordir"},
            {"quantity": "> 110 pcs", "price": "IDR 65K", "description": "Maks. 4 titik bordir"}
          ]
        }
      ],
      "note": null
    },
    {
      "id": "merchandise",
      "tabTitle": "Merchandise",
      "tabIcon": "fas fa-gift",
      "tableTitle": "Totebag", // Sesuai HTML Anda, bagian merchandise hanya berisi Totebag
      "merchandiseTypes": [
        {
          "name": "Blacu",
          "icon": "fas fa-shopping-bag",
          "items": [
            {"quantity": "< 50 pcs", "note": "Sublima/DTF", "price": "IDR 18K"},
            {"quantity": "51 - 110 pcs", "note": "Sublima/DTF", "price": "IDR 15K"},
            {"quantity": "> 110 pcs", "note": "Sublima/DTF", "price": "IDR 13K"}
          ]
        },
        {
          "name": "Canvas",
          "icon": "fas fa-paint-brush",
          "items": [
            // Perhatikan item quantity di HTML asli mungkin typo (> 50 pcs), saya asumsikan < 50 pcs atau range awal
            {"quantity": "< 50 pcs", "note": "Sublima/DTF", "price": "IDR 45K"},
            {"quantity": "51 - 110 pcs", "note": "Sublima/DTF", "price": "IDR 33K"},
            {"quantity": "> 110 pcs", "note": "Sublima/DTF", "price": "IDR 30K"}
          ]
        }
      ],
      "note": null
    }
  ]
};

    // --------------------------------------------------------------------------------
    // 1. SELEKTOR ELEMEN UMUM (yang mungkin ada di berbagai halaman)
    // --------------------------------------------------------------------------------
    const originalHeader = document.getElementById('originalHeader');
    const floatingNavbar = document.getElementById('floatingNavbar');
    const hamburger = document.getElementById('hamburger'); // Pastikan ID ini ada di HTML Anda
    const navMenu = document.querySelector('.nav-menu');
    const pageFooter = document.querySelector('footer');
    const body = document.body; // Untuk Dark Mode

    // --------------------------------------------------------------------------------
    // 2. FUNGSI UNTUK MOBILE MENU TOGGLE
    // --------------------------------------------------------------------------------
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Ganti ikon hamburger menjadi close (X) saat menu aktif, dan sebaliknya
            if (hamburger.querySelector('i')) { // Cek apakah ikon ada di dalam tombol
                 hamburger.querySelector('i').className = navMenu.classList.contains('active')
                    ? 'fas fa-times'
                    : 'fas fa-bars';
            }
        });

        // Tutup menu mobile jika link di dalamnya diklik (untuk anchor link)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        if (hamburger && hamburger.querySelector('i')) {
                             hamburger.querySelector('i').className = 'fas fa-bars';
                        }
                    }
                }
            });
        });
    }

    // --------------------------------------------------------------------------------
    // 3. FUNGSI UNTUK SMOOTH SCROLLING (sudah dimodifikasi untuk link eksternal)
    // --------------------------------------------------------------------------------
    document.querySelectorAll('a[href]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefValue = this.getAttribute('href');

            if (hrefValue && hrefValue.startsWith('#')) {
                const targetElement = document.querySelector(hrefValue);
                if (targetElement) { // Pastikan target elemen ada di halaman ini
                    e.preventDefault();
                    let headerOffset = 0;
                    if (originalHeader && !originalHeader.classList.contains('hide-original') && originalHeader.offsetHeight > 0) {
                        headerOffset = originalHeader.offsetHeight;
                    }
                    // Anda bisa menambahkan logika offset untuk floatingNavbar jika diperlukan di sini
                    
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    // Beri sedikit padding atas agar tidak terlalu mepet
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset + 20;


                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                // Jika targetElement tidak ada di halaman ini (misal href="#nonExistent"), biarkan default atau beri pesan
            }
            // Untuk link ke halaman lain (misal "portofolio.html"), e.preventDefault() tidak dipanggil, jadi navigasi normal.
        });
    });

    const priceTabsContainer = document.querySelector('.price-list .price-tabs');
    const priceTablesContainer = document.querySelector('.price-list .price-tables');

    if (priceTabsContainer && priceTablesContainer && priceListData && priceListData.priceList) {
        // Kosongkan kontainer jika ada konten statis sebelumnya (opsional)
        // priceTabsContainer.innerHTML = '';
        // priceTablesContainer.innerHTML = '';

        priceListData.priceList.forEach((tabData, index) => {
            // Buat Tombol Tab
            const tabButton = document.createElement('button');
            tabButton.classList.add('price-tab');
            if (index === 0) {
                tabButton.classList.add('active'); // Tab pertama aktif
            }
            tabButton.setAttribute('data-price', tabData.id);
            tabButton.innerHTML = `<i class="${tabData.tabIcon}"></i> ${tabData.tabTitle}`;
            priceTabsContainer.appendChild(tabButton);

            // Buat Tabel Harga
            const priceTableDiv = document.createElement('div');
            priceTableDiv.classList.add('price-table');
            if (index === 0) {
                priceTableDiv.classList.add('active'); // Tabel pertama aktif
            }
            priceTableDiv.id = `${tabData.id}-price`;

            const tableTitleH3 = document.createElement('h3');
            tableTitleH3.textContent = tabData.tableTitle;
            priceTableDiv.appendChild(tableTitleH3);

            if (tabData.categories) { // Untuk Seragam, Jaket, Kaos
                const priceGridDiv = document.createElement('div');
                priceGridDiv.classList.add('price-grid');

                tabData.categories.forEach(category => {
                    const priceCategoryDiv = document.createElement('div');
                    priceCategoryDiv.classList.add('price-category');

                    const categoryHeaderDiv = document.createElement('div');
                    categoryHeaderDiv.classList.add('category-header');
                    categoryHeaderDiv.textContent = category.name;
                    priceCategoryDiv.appendChild(categoryHeaderDiv);

                    const priceItemsDiv = document.createElement('div');
                    priceItemsDiv.classList.add('price-items');
                    category.items.forEach(item => {
                        const priceItemDiv = document.createElement('div');
                        priceItemDiv.classList.add('price-item');
                        priceItemDiv.innerHTML = `
                            <div class="quantity">${item.quantity}</div>
                            <div class="price">${item.price}</div>
                            <div class="description">${item.description}</div>
                        `;
                        priceItemsDiv.appendChild(priceItemDiv);
                    });
                    priceCategoryDiv.appendChild(priceItemsDiv);
                    priceGridDiv.appendChild(priceCategoryDiv);
                });
                priceTableDiv.appendChild(priceGridDiv);
            } else if (tabData.merchandiseTypes) { // Khusus untuk Merchandise
                const merchandiseGridDiv = document.createElement('div');
                merchandiseGridDiv.classList.add('merchandise-grid'); // Sesuai struktur HTML Anda

                tabData.merchandiseTypes.forEach(type => {
                    const merchandiseCategoryDiv = document.createElement('div');
                    merchandiseCategoryDiv.classList.add('merchandise-category');

                    const merchandiseHeaderDiv = document.createElement('div');
                    merchandiseHeaderDiv.classList.add('merchandise-header');
                    merchandiseHeaderDiv.innerHTML = `<i class="${type.icon}"></i> ${type.name}`;
                    merchandiseCategoryDiv.appendChild(merchandiseHeaderDiv);

                    const merchandiseItemsDiv = document.createElement('div');
                    merchandiseItemsDiv.classList.add('merchandise-items');
                    type.items.forEach(item => {
                        const merchandiseItemDiv = document.createElement('div');
                        merchandiseItemDiv.classList.add('merchandise-item');
                        merchandiseItemDiv.innerHTML = `
                            <div class="item-info">
                                <div class="item-quantity">${item.quantity}</div>
                                <div class="item-note">${item.note}</div>
                            </div>
                            <div class="item-price">${item.price}</div>
                        `;
                        merchandiseItemsDiv.appendChild(merchandiseItemDiv);
                    });
                    merchandiseCategoryDiv.appendChild(merchandiseItemsDiv);
                    merchandiseGridDiv.appendChild(merchandiseCategoryDiv);
                });
                priceTableDiv.appendChild(merchandiseGridDiv);
            }

            if (tabData.note) {
                const priceNoteDiv = document.createElement('div');
                priceNoteDiv.classList.add('price-note');
                priceNoteDiv.innerHTML = `<i class="${tabData.noteIcon}"></i> ${tabData.note}`;
                priceTableDiv.appendChild(priceNoteDiv);
            }

            priceTablesContainer.appendChild(priceTableDiv);
        });

        // Fungsionalitas Tab (menggunakan event delegation)
        // Pastikan kode ini tidak duplikat jika sudah ada di tempat lain.
        // Jika sudah ada, pastikan selectornya (.price-list .price-tabs) unik atau benar.
        if (priceTabsContainer) {
            priceTabsContainer.addEventListener('click', function(event) {
                const clickedTab = event.target.closest('.price-tab');
                if (!clickedTab) return;

                // Hapus kelas 'active' dari semua tombol tab di kontainer ini
                priceTabsContainer.querySelectorAll('.price-tab').forEach(b => b.classList.remove('active'));
                // Tambah kelas 'active' ke tombol yang diklik
                clickedTab.classList.add('active');

                // Sembunyikan semua panel tabel harga
                if (priceTablesContainer) {
                    priceTablesContainer.querySelectorAll('.price-table').forEach(pane => pane.classList.remove('active'));
                }

                // Tampilkan panel tabel harga yang sesuai
                const targetTableId = clickedTab.getAttribute('data-price') + '-price';
                const targetTableElement = document.getElementById(targetTableId);
                if (targetTableElement) {
                    targetTableElement.classList.add('active');
                }
            });
        }
    } else {
        console.warn('Price list containers or data not found. Dynamic price list not generated.');
    }


    // --------------------------------------------------------------------------------
    // 4. FUNGSI UNTUK FLOATING NAVBAR & ORIGINAL HEADER VISIBILITY (DINAMIS)
    // --------------------------------------------------------------------------------
    if (originalHeader && floatingNavbar) {
        let triggerSectionId;
        // Tentukan trigger section berdasarkan ID yang ada di halaman
        if (document.getElementById('hero')) {
            triggerSectionId = 'hero';
        } else if (document.getElementById('order-process')) {
            triggerSectionId = 'order-process'; // Pemicu untuk portofolio.html
        } else if (document.querySelector('section[id]')) {
            // Fallback ke section pertama yang punya ID jika tidak ada 'hero' atau 'order-process'
            // triggerSectionId = document.querySelector('section[id]').id;
        }
        // Jika tidak ada trigger sama sekali, floating navbar akan langsung muncul (kecuali footer terlihat)

        const triggerSection = triggerSectionId ? document.getElementById(triggerSectionId) : null;

        let isTriggerSectionVisible = false; // Default ke false agar floating navbar muncul jika tidak ada trigger section
        let isFooterVisible = false;

        // Inisialisasi state awal untuk trigger section
        if (triggerSection) {
            const rect = triggerSection.getBoundingClientRect();
            // Anggap visible jika bagian atasnya masih di viewport atau sedikit di atasnya, dan bagian bawahnya belum lewat sepenuhnya ke atas
             isTriggerSectionVisible = rect.top < (window.innerHeight * 0.9) && rect.bottom > (window.innerHeight * 0.1);
        }


        function updateNavbarStates() {
            // console.log(`Updating states: TriggerVisible=${isTriggerSectionVisible}, FooterVisible=${isFooterVisible}`);
            if (isTriggerSectionVisible || isFooterVisible) {
                floatingNavbar.classList.remove('show');
                originalHeader.classList.remove('hide-original');
            } else {
                floatingNavbar.classList.add('show');
                originalHeader.classList.add('hide-original');
            }
        }

        if (triggerSection) {
            const triggerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    isTriggerSectionVisible = entry.isIntersecting;
                    updateNavbarStates();
                });
            }, { 
                threshold: 0.1,
                // rootMargin: "0px 0px -10% 0px" // Bisa diaktifkan untuk trigger sedikit sebelum section hilang dari view
            });
            triggerObserver.observe(triggerSection);
        } else {
            // Jika tidak ada trigger section, kita anggap sudah dilewati
            isTriggerSectionVisible = false;
        }

        if (pageFooter) {
            const footerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    isFooterVisible = entry.isIntersecting;
                    updateNavbarStates();
                });
            }, { 
                threshold: 0.05, // Trigger saat 5% footer terlihat
                // rootMargin: "0px 0px 50px 0px" // Trigger 50px sebelum footer menyentuh bagian bawah viewport
            });
            footerObserver.observe(pageFooter);
        }
        
        // Panggil sekali untuk set kondisi awal
        updateNavbarStates(); 
    }


    // --------------------------------------------------------------------------------
    // 5. FUNGSI UNTUK ACTIVE STATE PADA FLOATING NAVBAR ITEMS
    // --------------------------------------------------------------------------------
    if (floatingNavbar) {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const floatingNavItems = document.querySelectorAll('.floating-nav-item');
            let currentScrollY = window.scrollY;
            let currentActive = '';
            let headerHeightForOffset = 150; // Default offset

            if (originalHeader && !originalHeader.classList.contains('hide-original') && originalHeader.offsetHeight > 0) {
                headerHeightForOffset = originalHeader.offsetHeight + 40; // Tambah sedikit ruang
            } else if (floatingNavbar.classList.contains('show') && floatingNavbar.offsetHeight > 0) {
                // headerHeightForOffset = floatingNavbar.offsetHeight + 40; // Offset jika floating navbar aktif
            }

            sections.forEach(section => {
                const sectionTop = section.offsetTop - headerHeightForOffset;
                if (currentScrollY >= sectionTop) {
                    currentActive = section.getAttribute('id');
                }
            });

            floatingNavItems.forEach(item => {
                item.classList.remove('active');
                const link = item.querySelector('a');
                if (link && link.getAttribute('href') === `#${currentActive}`) {
                    item.classList.add('active');
                }
            });
        });
    }

    // --------------------------------------------------------------------------------
    // 6. FUNGSI UNTUK TAB (Product Detail, Size Chart, Price List di portofolio.html)
    // --------------------------------------------------------------------------------
    function initializeTabs(tabButtonClass, tabPaneContainerSelector, dataAttribute, paneIdSuffix = '') {
        const tabBtns = document.querySelectorAll(tabButtonClass);
        const tabPanesContainer = document.querySelector(tabPaneContainerSelector);

        if (tabBtns.length > 0 && tabPanesContainer) {
            // Event delegation pada kontainer tombol tab
            const tabButtonsParent = tabBtns[0].parentElement; // Asumsi semua tombol tab punya parent yang sama
            
            tabButtonsParent.addEventListener('click', function(event) {
                const clickedTab = event.target.closest(tabButtonClass);
                if (!clickedTab) return;

                tabBtns.forEach(b => b.classList.remove('active'));
                clickedTab.classList.add('active');

                tabPanesContainer.querySelectorAll('.price-table, .tab-pane, .chart').forEach(pane => pane.classList.remove('active'));
                
                const targetId = clickedTab.getAttribute(dataAttribute) + paneIdSuffix;
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.classList.add('active');
                }
            });
        }
    }

    // Inisialisasi untuk setiap jenis tab jika ada di halaman
    if (document.querySelector('.price-list')) { // Hanya inisialisasi jika section price-list ada
         initializeTabs('.price-tab', '.price-tables', 'data-price', '-price');
    }
    if (document.querySelector('.product-detail-tabs')) { // Hanya inisialisasi jika section product-details ada
        initializeTabs('.tab-btn', '.product-detail-tabs .tab-content', 'data-tab');
    }
    if (document.querySelector('.size-chart')) { // Hanya inisialisasi jika section size-chart ada
        initializeTabs('.size-tab', '.size-charts', 'data-chart', '-chart');
    }


    // --------------------------------------------------------------------------------
    // 7. FUNGSI UNTUK VALIDASI FORM (jika ada form kontak di halaman)
    // --------------------------------------------------------------------------------
    const contactSection = document.getElementById('contact'); // Ambil section dengan ID 'contact'
if (contactSection) {
    const contactForm = contactSection.querySelector('#contactForm'); // Cari form di dalam section
    
    if (contactForm) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const successMessage = document.getElementById('successMessage');

        // Fungsi validasi
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

        // Fungsi untuk menampilkan/menyembunyikan error
        function showError(fieldId, errorId, message) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(errorId);
            
            if (field && errorElement) {
                field.classList.add('error');
                errorElement.style.display = 'block';
                errorElement.textContent = message;
            }
        }

        function hideError(fieldId, errorId) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(errorId);
            
            if (field && errorElement) {
                field.classList.remove('error');
                errorElement.style.display = 'none';
            }
        }

        // Fungsi validasi field dengan event listener
        function addFieldValidation(fieldId, validationFn, errorId, errorMessage) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(errorId);
            
            if (!field || !errorElement) return;

            // Validasi saat user keluar dari field (blur)
            field.addEventListener('blur', function() {
                const value = this.value.trim();
                if (this.hasAttribute('required') && value === '') {
                    showError(fieldId, errorId, `${this.previousElementSibling.textContent} harus diisi`);
                } else if (value !== '' && !validationFn(value)) {
                    showError(fieldId, errorId, errorMessage);
                } else {
                    hideError(fieldId, errorId);
                }
            });

            // Validasi saat user mengetik (input)
            field.addEventListener('input', function() {
                const value = this.value.trim();
                if (value !== '' && validationFn(value)) {
                    hideError(fieldId, errorId);
                }
            });
        }

        // Setup validasi untuk setiap field
        addFieldValidation('fullName', validateName, 'fullNameError', 'Nama harus minimal 2 karakter');
        addFieldValidation('email', validateEmail, 'emailError', 'Format email tidak valid');
        addFieldValidation('phone', validatePhone, 'phoneError', 'Format nomor telepon tidak valid');
        addFieldValidation('message', validateMessage, 'messageError', 'Pesan harus minimal 10 karakter');

        // Event listener untuk submit form
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil nilai dari semua field
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;

            // Validasi semua field yang required
            if (!validateName(fullName)) {
                showError('fullName', 'fullNameError', 'Nama harus minimal 2 karakter');
                isValid = false;
            }

            if (!validateEmail(email)) {
                showError('email', 'emailError', 'Format email tidak valid');
                isValid = false;
            }

            if (phone !== '' && !validatePhone(phone)) {
                showError('phone', 'phoneError', 'Format nomor telepon tidak valid');
                isValid = false;
            }

            if (!validateMessage(message)) {
                showError('message', 'messageError', 'Pesan harus minimal 10 karakter');
                isValid = false;
            }

            // Jika semua validasi berhasil
            if (isValid) {
                // Disable submit button dan ubah teks
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
                
                // Simulasi pengiriman (ganti dengan logika pengiriman sebenarnya)
                setTimeout(() => {
                    // Tampilkan pesan sukses
                    successMessage.style.display = 'block';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset submit button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
                    
                    // Sembunyikan pesan sukses setelah 5 detik
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                    
                }, 2000); // Simulasi delay 2 detik
            }
        });
    }
}

    // --------------------------------------------------------------------------------
    // 8. FUNGSI UNTUK DARK MODE TOGGLE (jika ada tombolnya di halaman)
    // --------------------------------------------------------------------------------
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle && body) {
        const moonIcon = '<i class="fas fa-moon"></i>';
        const sunIcon = '<i class="fas fa-sun"></i>';

        function applyTheme(theme) {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                darkModeToggle.innerHTML = sunIcon;
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                darkModeToggle.innerHTML = moonIcon;
                localStorage.setItem('theme', 'light');
            }
        }

        darkModeToggle.addEventListener('click', () => {
            body.classList.contains('dark-mode') ? applyTheme('light') : applyTheme('dark');
        });

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (prefersDark) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }

}); // Akhir dari DOMContentLoaded