document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
      const expanded = mainNav.classList.contains('is-open');
      mobileBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Filtro de Categorias no Cardápio / Catálogo
  const filterButtons = document.querySelectorAll('#categoryFilters .filter-btn');
  const categoryGroups = document.querySelectorAll('.catalog-category');

  if (filterButtons.length > 0 && categoryGroups.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

        // Atualiza estado ativo dos botões
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filtra grupos de catálogo
        categoryGroups.forEach(group => {
          const groupCat = group.getAttribute('data-category-group');
          if (category === 'all' || groupCat === category) {
            group.classList.remove('is-hidden');
          } else {
            group.classList.add('is-hidden');
          }
        });
      });
    });
  }
});
