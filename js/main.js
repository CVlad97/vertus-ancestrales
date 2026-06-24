// VERTUS ANCESTRALES — Main JavaScript

// === SEARCH DATASET ===
const SEARCH_DATA = [
  { title: 'Accueil — Vertus Ancestrales', url: 'index.html', desc: 'Cosmétiques naturels faits mains en Martinique. Rituels et bien-être.' },
  { title: 'Boutique — L\'Élixir de Vénus', url: 'boutique.html', desc: 'Huile de soin régénérante aux huiles essentielles d\'ylang-ylang et de bois de rose.' },
  { title: 'Boutique — Savon Noir Ancestral', url: 'boutique.html', desc: 'Savon noir purifiant à la cendre de bois de campêche et huile de coco vierge.' },
  { title: 'Boutique — Baume Spirituel', url: 'boutique.html', desc: 'Baume multi-usages à base de propolis, miel de Martinique et résines naturelles.' },
  { title: 'Boutique — Eau Florale de Gingembre', url: 'boutique.html', desc: 'Hydrolat tonifiant et stimulant au gingembre frais de Martinique.' },
  { title: 'Boutique — Bougie Rituelle Vétiver', url: 'boutique.html', desc: 'Bougie coulée à la main en cire de soja, parfumée au vétiver.' },
  { title: 'Boutique — Huile de Massage Ylang-Ylang', url: 'boutique.html', desc: 'Huile de massage onctueuse aux fleurs d\'ylang-ylang de Nosy Be.' },
  { title: 'Consultations — Monique Morgat', url: 'consultations.html', desc: 'Consultations personnalisées : générale ou médiumnique. Réservez votre séance.' },
  { title: 'Consultation Générale', url: 'consultations.html', desc: 'Échange approfondi de 45 min pour faire le point sur votre situation.' },
  { title: 'Consultation Médiumnique', url: 'consultations.html', desc: 'Connexion aux plans subtils pour éclaircir vos questionnements profonds.' },
  { title: 'Blog — Les 7 Rituels de Pleine Lune', url: 'blog.html', desc: 'Pratiques ancestrales pour harmoniser votre être lors des nuits de pleine lune.' },
  { title: 'Blog — Huiles Végétales', url: 'blog.html', desc: 'Comment intégrer les huiles naturelles dans vos soins de peau.' },
  { title: 'Blog — Signes de l\'Univers', url: 'blog.html', desc: 'Apprenez à décoder les synchronicités et les messages du cosmos.' },
  { title: 'Blog — Savon Noir Ancestral', url: 'blog.html', desc: 'Histoire et bienfaits de ce soin purifiant transmis en Martinique.' },
  { title: 'Blog — Créer son Autel Personnel', url: 'blog.html', desc: 'Guide pour débutants pour créer un espace sacré chez soi.' },
  { title: 'Blog — Respiration Consciente', url: 'blog.html', desc: 'Techniques ancestrales de respiration pour apaiser le mental.' },
  { title: 'Notre Histoire', url: 'histoire.html', desc: 'L\'histoire de Vertus Ancestrales, née en Martinique.' },
  { title: 'Monique Morgat', url: 'monique.html', desc: 'Praticienne en médecine douce, consultante générale & médiumnique.' },
  { title: 'Témoignages', url: 'temoignages.html', desc: 'Ce que nos clients et consultés partagent de leur expérience.' }
];

// === PRODUCT MANAGEMENT MODULE ===
const PRODUCT_DEFAULTS = [
  { id:'elixir-venus', nom:"L'Élixir de Vénus", description:"Huile de soin régénérante aux huiles essentielles d'ylang-ylang et de bois de rose. Nourrit, illumine et restaure l'éclat naturel de la peau.", categorie:'huiles', image:'produit-elixir-venus.jpg', badge:'Nouveau', icone:'fa-flask', variantes:[{taille:'50ml',prix:'32€'},{taille:'100ml',prix:'48€'},{taille:'250ml',prix:'72€'}] },
  { id:'savon-noir', nom:'Savon Noir Ancestral', description:"Savon noir purifiant à la cendre de bois de campêche et huile de coco vierge. Nettoie en profondeur tout en respectant l'équilibre de la peau.", categorie:'soins', image:'produit-savon-noir.jpg', badge:'', icone:'fa-soap', variantes:[{taille:'100g',prix:'14€'},{taille:'200g',prix:'22€'}] },
  { id:'baume-spirituel', nom:'Baume Spirituel', description:"Baume multi-usages à base de propolis, miel de Martinique et résines naturelles. Apaise, protège et régénère les peaux sensibles.", categorie:'soins', image:'produit-baume-spirituel.jpg', badge:'Meilleure vente', icone:'fa-mortar-pestle', variantes:[{taille:'30ml',prix:'26€'},{taille:'60ml',prix:'38€'}] },
  { id:'eau-florale', nom:'Eau Florale de Gingembre', description:"Hydrolat tonifiant et stimulant, distillé à partir de gingembre frais de Martinique. Revitalise, réchauffe et équilibre les énergies.", categorie:'huiles', image:'produit-eau-florale.jpg', badge:'', icone:'fa-spa', variantes:[{taille:'100ml',prix:'18€'},{taille:'200ml',prix:'28€'}] },
  { id:'bougie-vetiver', nom:'Bougie Rituelle Vétiver', description:"Bougie coulée à la main en cire de soja, parfumée à l'huile essentielle de vétiver de Haïti. Idéale pour les méditations et rituels d'ancrage.", categorie:'accessoires', image:'produit-bougie-vetiver.jpg', badge:'', icone:'fa-fire', variantes:[{taille:'190g',prix:'24€'},{taille:'380g',prix:'38€'}] },
  { id:'huile-ylang', nom:'Huile de Massage Ylang-Ylang', description:"Huile de massage onctueuse aux fleurs d'ylang-ylang de Nosy Be. Enveloppe, apaise et harmonise le corps et l'esprit.", categorie:'huiles', image:'produit-huile-ylang.jpg', badge:'', icone:'fa-hand-sparkles', variantes:[{taille:'100ml',prix:'34€'},{taille:'250ml',prix:'54€'}] }
];

function getProducts() {
  try {
    const stored = localStorage.getItem('va_products');
    if (stored) return JSON.parse(stored);
  } catch(e) { console.warn('Failed to parse va_products', e); }
  return JSON.parse(JSON.stringify(PRODUCT_DEFAULTS));
}

function saveProducts(products) {
  localStorage.setItem('va_products', JSON.stringify(products));
}

function getCategoryLabel(val) {
  const map = { huiles:'Huiles & Élixirs', soins:'Soins Corps', accessoires:'Accessoires Rituels' };
  return map[val] || val;
}

// Render products from localStorage data on boutique.html
function renderProductsFromData() {
  const grid = document.querySelector('.boutique-grid .produits-grid');
  if (!grid) return;
  const products = getProducts();
  if (!products || products.length === 0) return;

  grid.innerHTML = products.map(p => {
    const imgUrl = p.image ? `url('../images/${p.image}')` : '';
    const gradient = 'linear-gradient(135deg, #f0dcc0, #d4a373)';
    const bgStyle = imgUrl ? `background: ${imgUrl} center/cover no-repeat, ${gradient}` : `background: ${gradient}`;
    const badgeHtml = p.badge ? `<div class="produit-badge">${p.badge}</div>` : '';
    const variantesHtml = (p.variantes || []).map((v, vi) =>
      `<span class="variante${vi===0?' active':''}">${v.taille} — ${v.prix}</span>`
    ).join('');

    return `<div class="produit-card fade-in" data-category="${p.categorie}" data-product-id="${p.id}">
      ${badgeHtml}
      <div class="produit-img" style="${bgStyle}">
        <i class="fas ${p.icone || 'fa-box'}" style="color:#8b6914;"></i>
      </div>
      <div class="produit-info">
        <h3>${p.nom}</h3>
        <p class="produit-desc">${p.description}</p>
        <div class="produit-variantes">${variantesHtml}</div>
        <button class="btn-add-cart"><i class="fas fa-shopping-bag"></i> Ajouter au panier</button>
      </div>
    </div>`;
  }).join('');
}

// Admin-only functions (checked via #admin-mode exists on page)
function renderProductTable() {
  const tbody = document.getElementById('product-table-body');
  if (!tbody) return;
  const products = getProducts();
  tbody.innerHTML = products.map(p => {
    const variantesStr = (p.variantes || []).map(v => v.taille+' — '+v.prix).join(', ');
    const imgPath = p.image ? `../images/${p.image}` : '';
    const imgHtml = imgPath ? `<img src="${imgPath}" alt="${p.nom}" style="width:50px;height:50px;object-fit:cover;border-radius:6px;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />` : '';
    const fallbackHtml = `<div style="width:50px;height:50px;border-radius:6px;background:#f0e6d6;display:flex;align-items:center;justify-content:center;font-size:1.2rem;color:#b8860b;display:none;"><i class="fas ${p.icone || 'fa-box'}"></i></div>`;
    return `<tr>
      <td>${imgHtml}${fallbackHtml}</td>
      <td><strong>${p.nom}</strong></td>
      <td>${getCategoryLabel(p.categorie)}</td>
      <td style="font-size:0.85rem;">${variantesStr}</td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="openEditModal('${p.id}')" style="margin-right:0.25rem;"><i class="fas fa-edit"></i> Modifier</button>
        <button class="btn btn-sm btn-outline" onclick="deleteProduct('${p.id}')" style="color:#c0392b;border-color:#c0392b;"><i class="fas fa-trash"></i> Supprimer</button>
      </td>
    </tr>`;
  }).join('');
}

function openEditModal(productId) {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  const title = document.getElementById('modal-title');
  const products = getProducts();

  document.getElementById('edit-product-id').value = productId || '';
  const container = document.getElementById('variantes-container');
  if (container) container.innerHTML = '';

  if (productId) {
    const p = products.find(x => x.id === productId);
    if (!p) return;
    title.textContent = 'Modifier le Produit';
    document.getElementById('modal-nom').value = p.nom;
    document.getElementById('modal-categorie').value = p.categorie;
    document.getElementById('modal-description').value = p.description;
    document.getElementById('modal-image').value = p.image || '';
    (p.variantes || []).forEach(v => addVarianteRow(v.taille, v.prix));
  } else {
    title.textContent = 'Ajouter un Produit';
    document.getElementById('modal-nom').value = '';
    document.getElementById('modal-categorie').value = 'huiles';
    document.getElementById('modal-description').value = '';
    document.getElementById('modal-image').value = '';
    addVarianteRow('', '');
  }

  modal.style.display = 'flex';
}

function closeEditModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.style.display = 'none';
}

function addVarianteRow(taille, prix) {
  const container = document.getElementById('variantes-container');
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'variante-row';
  row.style.cssText = 'display:flex; gap:0.5rem; margin-bottom:0.5rem;';
  row.innerHTML = `
    <input type="text" class="input" placeholder="Taille (ex: 50ml)" style="flex:1;" name="variante-taille" value="${taille || ''}">
    <input type="text" class="input" placeholder="Prix (ex: 32€)" style="flex:1;" name="variante-prix" value="${prix || ''}">
    <button type="button" class="btn btn-sm btn-outline" onclick="this.parentElement.remove()" style="flex-shrink:0;"><i class="fas fa-times"></i></button>
  `;
  container.appendChild(row);
}

function saveProductFromModal() {
  const editId = document.getElementById('edit-product-id').value;
  const products = getProducts();

  const variantes = [];
  document.querySelectorAll('.variante-row').forEach(row => {
    const t = row.querySelector('[name="variante-taille"]')?.value.trim();
    const p = row.querySelector('[name="variante-prix"]')?.value.trim();
    if (t || p) variantes.push({ taille: t, prix: p });
  });

  const productData = {
    id: editId || 'prod-' + Date.now(),
    nom: document.getElementById('modal-nom').value.trim(),
    categorie: document.getElementById('modal-categorie').value,
    description: document.getElementById('modal-description').value.trim(),
    image: document.getElementById('modal-image').value.trim(),
    badge: '',
    icone: 'fa-box',
    variantes: variantes
  };

  if (!productData.nom) { alert('Le nom du produit est requis.'); return; }

  if (editId) {
    const idx = products.findIndex(x => x.id === editId);
    if (idx >= 0) products[idx] = productData;
    else products.push(productData);
  } else {
    products.push(productData);
  }

  saveProducts(products);
  renderProductTable();
  closeEditModal();
  if (typeof showToast === 'function') showToast('✓ Produit enregistré');
}

function deleteProduct(productId) {
  if (!confirm('Supprimer ce produit ?')) return;
  const products = getProducts().filter(p => p.id !== productId);
  saveProducts(products);
  renderProductTable();
  if (typeof showToast === 'function') showToast('✓ Produit supprimé');
}

// === GLOBAL SEARCH FUNCTION ===
function initGlobalSearch() {
  const searchToggle = document.getElementById('searchToggle');
  const searchDropdown = document.getElementById('searchDropdown');
  const searchInput = document.getElementById('globalSearch');
  const searchResults = document.getElementById('searchResults');

  if (!searchToggle || !searchDropdown) return;

  // Toggle search dropdown
  searchToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    searchDropdown.classList.toggle('open');
    if (searchDropdown.classList.contains('open')) {
      setTimeout(() => searchInput?.focus(), 100);
    }
  });

  // Close on click outside
  document.addEventListener('click', function(e) {
    if (!searchDropdown.contains(e.target) && e.target !== searchToggle && !searchToggle.contains(e.target)) {
      searchDropdown.classList.remove('open');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      searchDropdown.classList.remove('open');
    }
  });

  if (!searchInput || !searchResults) return;

  // Search logic
  searchInput.addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    if (q.length < 2) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }

    const results = SEARCH_DATA.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    ).slice(0, 8);

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-empty">Aucun résultat trouvé</div>';
    } else {
      searchResults.innerHTML = results.map(r =>
        `<a href="${r.url}" class="search-result-item">
          <span class="search-result-title">${highlightMatch(r.title, q)}</span>
          <span class="search-result-desc">${highlightMatch(r.desc, q)}</span>
        </a>`
      ).join('');
    }
    searchResults.style.display = 'block';
  });
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return text;
  return text.slice(0, idx) + '<strong>' + text.slice(idx, idx + query.length) + '</strong>' + text.slice(idx + query.length);
}

document.addEventListener('DOMContentLoaded', () => {

  // === RENDER PRODUCTS FROM LOCALSTORAGE (boutique.html) ===
  renderProductsFromData();

  // === INIT GLOBAL SEARCH ===
  initGlobalSearch();

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

  // === FADE-IN ON SCROLL (enhanced with scale + slide) ===
  function initFadeIn() {
    const fadeElements = document.querySelectorAll('.fade-in');
    if (fadeElements.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    fadeElements.forEach(el => observer.observe(el));
  }
  initFadeIn();

  // === STAGGER CARDS (dynamic) ===
  function initStagger() {
    document.querySelectorAll('.produits-grid, .blog-grid, .valeurs-grid, .temoignages-strip, .insta-grid').forEach(grid => {
      grid.querySelectorAll('.fade-in').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.1}s`;
      });
    });
  }
  initStagger();

  // === PRODUCT VARIANT SELECTOR (event delegation) ===
  document.addEventListener('click', function(e) {
    const variante = e.target.closest('.variante');
    if (variante) {
      const siblings = variante.closest('.produit-variantes').querySelectorAll('.variante');
      siblings.forEach(s => s.classList.remove('active'));
      variante.classList.add('active');
    }
  });

  // === CART BUTTONS (enhanced with "Ajouté ✓" animation) ===
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-add-cart');
    if (btn) {
      e.preventDefault();

      // Visual feedback: "Ajouté ✓" animation
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Ajouté ✓';
      btn.style.background = '#2d5a27';
      btn.style.transform = 'scale(0.95)';

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.transform = '';
      }, 1500);

      cartCount++;
      localStorage.setItem('vaCartCount', cartCount);
      if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = 'flex';
        cartBadge.style.animation = 'badgePop 0.3s ease';
        setTimeout(() => { if (cartBadge) cartBadge.style.animation = ''; }, 300);
      }
      const name = btn.closest('.produit-info')?.querySelector('h3')?.textContent || 'Produit';
      showToast(`✓ ${name} ajouté au panier`);
    }
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