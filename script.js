document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      duration: 1000,
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