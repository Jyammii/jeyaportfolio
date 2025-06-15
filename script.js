window.addEventListener('DOMContentLoaded', function() {
  // Navigation active link based on scroll and click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      const target = this.getAttribute('href').replace('#', '');
      if (target && document.getElementById(target)) {
        e.preventDefault();
        document.getElementById(target).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  function updateNavOnScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['home','about','services','gallery','contact']
      .map(id => document.getElementById(id));
    let found = false;
    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      if (sec && sec.getBoundingClientRect().top - 120 < window.innerHeight / 2) {
        navLinks.forEach(l => l.classList.remove('active'));
        navLinks[i].classList.add('active');
        found = true;
      }
    }
    if (!found) navLinks.forEach(l => l.classList.remove('active'));
  }
  window.addEventListener('scroll', updateNavOnScroll, { passive: true });

  // "Press to Continue" scroll
  const heroContinue = document.querySelector('.hero-continue');
  if (heroContinue && document.getElementById('about')) {
    heroContinue.addEventListener('click', () => {
      document.getElementById('about').scrollIntoView({ behavior: "smooth" });
    });
  }

  // Contact form demo (no backend)
  const contactForm = document.querySelector('.contact-form-v2');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      this.reset();
      this.querySelectorAll("input, textarea, button").forEach(el => el.disabled = true);
      this.querySelector('.contact-btn-v2').textContent = "Message Sent!";
      this.querySelector('.contact-btn-v2').style.background = "#aaf0c8";
      this.querySelector('.contact-btn-v2').style.color = "#232339";
      setTimeout(() => {
        this.querySelectorAll("input, textarea, button").forEach(el => el.disabled = false);
        this.querySelector('.contact-btn-v2').textContent = "Send Message";
        this.querySelector('.contact-btn-v2').style.background = "#ff6600";
        this.querySelector('.contact-btn-v2').style.color = "#fff";
      }, 2500);
    });
  }
});