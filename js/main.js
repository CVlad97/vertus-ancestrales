// VERTUS ANCESTRALES — Main JavaScript
document.addEventListener('DOMContentLoaded', () => {

  // === NAVBAR SCROLL EFFECT ===
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });

  // === MOBILE NAV TOGGLE ===
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.classList.toggle('nav-open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.classList.remove('nav-open');
      });
    });
  }

  // === BACK TO TOP ===
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('visible', window.pageYOffset > 400);
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === FADE-IN ON SCROLL ===
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    fadeElements.forEach(el => observer.observe(el));
  }

  // === STAGGER CARDS ===
  document.querySelectorAll('.produits-grid, .blog-grid, .valeurs-grid, .temoignages-strip').forEach(grid => {
    grid.querySelectorAll('.fade-in').forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  // === PRODUCT VARIANT SELECTOR ===
  document.querySelectorAll('.variante').forEach(v => {
    v.addEventListener('click', function() {
      const siblings = this.closest('.produit-variantes').querySelectorAll('.variante');
      siblings.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // === CALENDAR PLACEHOLDER ===
  const calendarEl = document.getElementById('calendar-placeholder');
  if (calendarEl) {
    const today = new Date();
    const months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

    let calHtml = `<div class="calendar-header"><button class="cal-nav">←</button><span>${month} ${year}</span><button class="cal-nav">→</button></div>`;
    calHtml += '<div class="calendar-weekdays"><span>Dim</span><span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span></div>';
    calHtml += '<div class="calendar-days">';
    for (let i = 0; i < firstDay; i++) calHtml += '<span></span>';
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = d === today.getDate();
      const isWeekend = (firstDay + d - 1) % 7 === 0 || (firstDay + d - 1) % 7 === 6;
      calHtml += `<span class="${isToday ? 'today' : ''} ${isWeekend ? 'weekend' : 'available'}">${d}</span>`;
    }
    calHtml += '</div>';
    calendarEl.innerHTML = calHtml;
  }

  // === FILTER BUTTONS ===
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      document.querySelectorAll('.produit-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });

  // === CART COUNTER ===
  let cartCount = parseInt(localStorage.getItem('vaCartCount') || '0');
  const cartBadge = document.getElementById('cart-count');
  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
  }

  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      cartCount++;
      localStorage.setItem('vaCartCount', cartCount);
      if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = 'flex';
      }
      const name = this.closest('.produit-info')?.querySelector('h3')?.textContent || 'Produit';
      showToast(`✓ ${name} ajouté au panier`);
    });
  });

  // === TOAST ===
  function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }
  window.showToast = showToast;

  // === BLOG SEARCH ===
  const searchInput = document.getElementById('blog-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const q = this.value.toLowerCase();
      document.querySelectorAll('.blog-card').forEach(card => {
        const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
        const excerpt = card.querySelector('p')?.textContent?.toLowerCase() || '';
        card.style.display = (title.includes(q) || excerpt.includes(q)) ? '' : 'none';
      });
    });
  }

  // === CONSULT PRICE ===
  const typeSelect = document.getElementById('consult-type');
  const priceDisplay = document.getElementById('consult-price');
  if (typeSelect && priceDisplay) {
    const prices = { 'generale': '70€', 'mediumnique': '90€' };
    typeSelect.addEventListener('change', function() {
      priceDisplay.textContent = prices[this.value] || '—';
    });
  }

  console.log('✦ Vertus Ancestrales — Bienvenue ✦');
});