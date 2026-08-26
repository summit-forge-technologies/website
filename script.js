const mobileMenu = document.querySelector(".nav-menu");

if (mobileMenu instanceof HTMLDetailsElement) {
  const menuSummary = mobileMenu.querySelector("summary");
  const closeMenu = () => {
    mobileMenu.open = false;
  };

  mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  mobileMenu.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.open) {
      closeMenu();
      menuSummary?.focus();
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (mobileMenu.open && event.target instanceof Node && !mobileMenu.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("hashchange", closeMenu);
}
