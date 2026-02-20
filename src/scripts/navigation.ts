export const initNavigationMenu = (): void => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn') as HTMLButtonElement | null;
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn') as HTMLButtonElement | null;

  if (!mobileMenuBtn || !mobileMenu) return;

  const toggleMenu = (e: MouseEvent) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('hidden');
    // document.body.style.overflow = mobileMenu.classList.contains('hidden') ? '' : 'hidden'; // Optional: disable scroll lock for dropdown
  };

  const closeMenu = () => {
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  mobileMenuBtn.addEventListener('click', toggleMenu);
  
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
  }

  // Close on link click
  mobileMenu.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close on click outside
  document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target as Node) && !mobileMenuBtn.contains(event.target as Node)) {
      closeMenu();
    }
  });
};
