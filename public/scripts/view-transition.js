export function setupViewTransitions() {
  if (typeof window !== 'undefined') {
    const links = document.querySelectorAll('a');
  
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const url = link.getAttribute('href');
        const currentPage = document.querySelector('main');
  
        currentPage.classList.add('page-transition-exit');
        currentPage.addEventListener('transitionend', () => {
          window.location.href = url;
        });
      });
    });
  
    window.addEventListener('load', () => {
      const currentPage = document.querySelector('main');
      currentPage.classList.add('page-transition-enter');
    });
  }
}