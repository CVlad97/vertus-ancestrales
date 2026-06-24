# RAPPORT DE TRANSFORMATION — Vertus Ancestrales

## Résumé

Transformation complète du site **Vertus Ancestrales** (cosmétiques naturels, Martinique) avec photos professionnelles, intégration Instagram, barre de recherche globale, et animations améliorées.

---

## 1. Images téléchargées (11 fichiers)

| Fichier | Source (Unsplash) | Usage | Taille |
|---------|-------------------|-------|--------|
| `hero-bg.jpg` | Tropical/Caribbean beach | Fond héros index.html + bannière boutique.html | 972 KB |
| `about-brand.jpg` | Herbes/ingrédients naturels | Fond héros monique.html + histoire.html | 266 KB |
| `monique-portrait.jpg` | Portrait femme chaleureux | Photo Monique (index.html, monique.html) | 82 KB |
| `consultation-bg.jpg` | Scène apaisante/spirituelle | Fond héros consultations.html + temoignages.html | 989 KB |
| `blog-hero.jpg` | Écriture/journal | Fond héros blog.html | 175 KB |
| `insta-1.jpg` à `insta-6.jpg` | Lifestyle/portraits | Galerie Instagram + footer strip | 56–97 KB |

**Méthode :** Test préalable de chaque URL Unsplash avec `curl -sI` (vérification HTTP 200), puis téléchargement avec `curl -sL`.

---

## 2. Fichiers HTML modifiés (7 fichiers)

### `index.html` — Page d'accueil
- ✅ **Hero section** : arrière-plan `hero-bg.jpg` avec effet parallaxe (fixed)
- ✅ **Barre de recherche** : icône loupe dans la navbar → dropdown de recherche globale
- ✅ **Instagram gallery** : nouvelle section "✦ Suivez-nous sur Instagram" entre témoignages et newsletter
  - Grille 3×2 avec photos insta-1 à insta-6
  - Hover overlay avec icône Instagram + zoom
  - Lien vers @vertusancestrales
- ✅ **Monique photo** : remplacement de l'icône Font Awesome par `monique-portrait.jpg`
- ✅ **Footer Instagram strip** : 6 miniatures avec hover overlay
- ✅ **Animations améliorées** : fade-in avec scale + slide (cubic-bezier)
- ✅ **Cartes produits** : hover scale(1.02) + ombre profonde

### `boutique.html` — Page boutique
- ✅ **Hero avec image de fond** : `hero-bg.jpg` avec overlay sombre
- ✅ **Barre de recherche** dans la navbar
- ✅ **Cartes produits améliorées** : hover translateY(-8px) scale(1.02), shadow 20px 60px
- ✅ **Bouton Ajouter au panier** : animation "Ajouté ✓" + scale(0.95) feedback
- ✅ **Footer Instagram strip**
- ✅ **Animations fade-in améliorées**

### `blog.html` — Page blog
- ✅ **Hero avec image de fond** : `blog-hero.jpg` (écriture/ésotérique)
- ✅ **Barre de recherche** dans la navbar
- ✅ **Footer Instagram strip**
- ✅ **Animations fade-in améliorées**

### `consultations.html` — Page consultations
- ✅ **Hero avec image de fond** : `consultation-bg.jpg` (calme/spirituel)
- ✅ **Barre de recherche** dans la navbar
- ✅ **Footer Instagram strip**
- ✅ **Animations fade-in améliorées**

### `monique.html` — Page Monique
- ✅ **Hero avec image de fond** : `about-brand.jpg` (nature/herbes)
- ✅ **Barre de recherche** dans la navbar
- ✅ **Photo Monique** : remplacement icône par `monique-portrait.jpg`
- ✅ **Footer Instagram strip**
- ✅ **Animations fade-in améliorées**

### `histoire.html` — Page Notre Histoire
- ✅ **Hero avec image de fond** : `about-brand.jpg` (nature/herbes)
- ✅ **Barre de recherche** dans la navbar
- ✅ **Footer Instagram strip**
- ✅ **Animations fade-in améliorées**

### `temoignages.html` — Page Témoignages
- ✅ **Hero avec image de fond** : `consultation-bg.jpg`
- ✅ **Barre de recherche** dans la navbar
- ✅ **Badge de note moyenne** : style glassmorphisme (backdrop-filter)
- ✅ **Footer Instagram strip**
- ✅ **Animations fade-in améliorées**

---

## 3. Fichier JavaScript modifié (`js/main.js`)

### Module de Recherche Globale
- ✅ `SEARCH_DATA` : 19 entrées de site avec titres, URLs, descriptions
- ✅ `initGlobalSearch()` : Initialisation de la recherche
  - Toggle d'ouverture/fermeture du dropdown
  - Fermeture au clic extérieur + touche Échap
  - Recherche insensible à la casse (≥ 2 caractères)
  - Highlight des termes trouvés (balises `<strong>`)
  - Limite à 8 résultats maximum
  - Message "Aucun résultat trouvé" si vide

### Animations Améliorées
- ✅ Fade-in avec **scale(0.97) + translateY(30px)** → visible: scale(1) + translateY(0)
- ✅ `cubic-bezier(0.25, 0.46, 0.45, 0.94)` pour transitions fluides
- ✅ Stagger retard pour `.insta-grid` (nouveau sélecteur ajouté)

### Bouton Panier Amélioré
- ✅ Feedback visuel : bouton devient vert "Ajouté ✓" pendant 1.5s
- ✅ Scale(0.95) au clic
- ✅ Animation `badgePop` sur le compteur

### Toast
- ✅ Fond vert (`var(--color-accent)`)
- ✅ Ombre portée

---

## 4. CSS ajouté (inline dans chaque page)

### Nouveaux sélecteurs CSS
- `.search-dropdown` / `.search-dropdown.open` — Dropdown de recherche
- `.search-result-item` / `.search-result-title` / `.search-result-desc` — Résultats
- `.insta-section` / `.insta-grid` / `.insta-item` — Galerie Instagram
- `.footer-insta-strip` / `.footer-insta-thumbs` — Strip Instagram dans footer
- `.fade-in` (amélioré) — scale + translateY
- `@keyframes badgePop` — Animation compteur panier

### Animation clés
| Propriété | Valeur |
|-----------|--------|
| `.fade-in` transition | `opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s ...` |
| `.produit-card:hover` | `transform: translateY(-8px) scale(1.02)` |
| `.insta-item:hover img` | `transform: scale(1.1)` |
| `.btn-add-cart:active` | `transform: scale(0.95)` |
| `.search-dropdown` transition | `all 0.25s cubic-bezier(...)` |

---

## 5. Fichier non modifié

- `css/style.css` — Inchangé (conformément aux instructions)

---

## 6. Statistiques

| Métrique | Valeur |
|----------|--------|
| Fichiers HTML modifiés | 7 |
| Fichiers JS modifiés | 1 |
| Images téléchargées | 11 |
| Images existantes conservées | 6 |
| Nouvelles sections ajoutées | 2 (Instagram Gallery + Search) |
| Nouvelles features | 4 (Search, Instagram, Animations, Hero images) |

---

*Rapport généré le 24 Juin 2026*