/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/*
  Automatically add/remove the `breakout` class on `.pdf-embed.pdf-wide`
  when the viewport is large enough so the resume can expand full-bleed.
*/
(function () {
  const BREAKPOINT = 1200; // px — use >= 1200 for 'xl' and up

  function debounce(fn, ms = 120) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  function updatePdfBreakout() {
    const elems = document.querySelectorAll('.pdf-embed.pdf-wide');
    elems.forEach(el => {
      if (window.innerWidth >= BREAKPOINT) {
        el.classList.add('breakout');
      } else {
        el.classList.remove('breakout');
      }
    });
  }

  // Initialize on load
  document.addEventListener('DOMContentLoaded', updatePdfBreakout);
  // Also run immediately in case DOMContentLoaded already fired
  updatePdfBreakout();

  // Update on resize/orientation change (debounced)
  window.addEventListener('resize', debounce(updatePdfBreakout));
  window.addEventListener('orientationchange', debounce(updatePdfBreakout));
})();
