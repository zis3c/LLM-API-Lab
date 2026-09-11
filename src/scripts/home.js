(function () {
  const tabs = document.querySelectorAll('.tab-btn');
  const panes = document.querySelectorAll('.code-pane');
  const cards = document.querySelectorAll('.spec-card[data-tab-target]');
  const deck = document.querySelector('.terminal-deck');
  const copyButton = document.getElementById('btn-copy');
  const copyLabel = document.getElementById('copy-label');

  function selectTab(targetId, selectedTab) {
    tabs.forEach(tab => {
      const active = tab === selectedTab || tab.dataset.target === targetId;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active);
    });
    panes.forEach(pane => pane.classList.toggle('active', pane.id === targetId));
    cards.forEach(card => card.classList.toggle('active-card', card.dataset.tabTarget === targetId));
    deck?.classList.remove('deck-light-up');
    void deck?.offsetWidth;
    deck?.classList.add('deck-light-up');
  }

  tabs.forEach(tab => tab.addEventListener('click', () => selectTab(tab.dataset.target, tab)));
  cards.forEach(card => card.addEventListener('click', () => selectTab(card.dataset.tabTarget)));

  copyButton?.addEventListener('click', async () => {
    const pane = document.querySelector('.code-pane.active');
    if (!pane) return;
    const success = await window.Clipboard.copy(pane.innerText.trim());
    copyLabel.textContent = success ? 'Copied!' : 'Done!';
    setTimeout(() => { copyLabel.textContent = 'Copy'; }, 1600);
  });
})();
