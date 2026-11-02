const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.textContent = isOpen ? '×' : '☰';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
      });
    });

    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        item.classList.toggle('active');
      });
    });

    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

    document.getElementById('year').textContent = new Date().getFullYear();

    document.getElementById('contactForm').addEventListener('submit', event => {
      event.preventDefault();
      alert('Thanks for your interest! This is a website demo. Connect a form service or backend to receive enquiries.');
    });