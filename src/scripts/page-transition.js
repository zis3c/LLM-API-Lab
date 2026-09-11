(function () {
  let progressBar;
  let scrollIndicator;
  const prefetchedUrls = new Set();

  function element(id) {
    return document.getElementById(id) || Object.assign(document.body.appendChild(document.createElement('div')), {
      id,
      ariaHidden: 'true'
    });
  }

  function updateScroll() {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total <= 50) {
      document.body.classList.remove('has-scroll');
      return;
    }
    document.body.classList.add('has-scroll');
    scrollIndicator ??= element('scroll-indicator');
    scrollIndicator.style.width = `${Math.max(0, Math.min(100, window.scrollY / total * 100))}%`;
  }

  function finishProgress() {
    progressBar ??= element('page-progress-bar');
    progressBar.style.transition = 'width .1s ease-out, opacity .12s ease-out';
    progressBar.style.width = '100%';
    setTimeout(() => {
      progressBar.style.opacity = '0';
      setTimeout(() => { progressBar.style.width = '0%'; }, 100);
    }, 80);
  }

  function prefetch(href) {
    if (prefetchedUrls.has(href)) return;
    prefetchedUrls.add(href);
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }

  function init() {
    finishProgress();
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll, { passive: true });
    window.addEventListener('pageshow', () => {
      document.body.classList.remove('page-leaving');
      finishProgress();
      updateScroll();
    });

    document.addEventListener('mouseover', event => {
      const link = event.target.closest('a');
      const href = link?.getAttribute('href');
      if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto')) prefetch(href);
    });

    document.addEventListener('click', event => {
      const link = event.target.closest('a');
      const href = link?.getAttribute('href');
      if (!href || href.startsWith('#') || /^https?:|mailto:|tel:/.test(href) || link.target === '_blank' || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = new URL(link.href, location.href);
      if (target.origin === location.origin && target.pathname === location.pathname && !target.hash) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      progressBar ??= element('page-progress-bar');
      progressBar.style.opacity = '1';
      progressBar.style.width = '70%';
      document.body.classList.add('page-leaving');
      setTimeout(() => { location.href = href; }, 70);
    });
  }

  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
