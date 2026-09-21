/**
 * Mandira Kalinga Dōna - Portfolio Script
 * Simple, lightweight vanilla JavaScript for interactive features.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking any navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. One-Click Email Copy Feature
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const copyToast = document.getElementById('copyToast');
  const emailToCopy = 'mkavindidesilva@gmail.com';

  if (copyBtn && copyBtnText && copyToast) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailToCopy);
        copyBtnText.textContent = 'Copied! ✓';
        copyToast.classList.add('show');

        // Reset button and toast after 2.5 seconds
        setTimeout(() => {
          copyBtnText.textContent = 'Copy Email';
          copyToast.classList.remove('show');
        }, 2500);
      } catch (err) {
        // Fallback for older browsers
        copyBtnText.textContent = 'Copied!';
        copyToast.classList.add('show');
        setTimeout(() => {
          copyBtnText.textContent = 'Copy Email';
          copyToast.classList.remove('show');
        }, 2500);
      }
    });
  }
});
