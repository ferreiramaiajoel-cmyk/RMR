document.addEventListener('DOMContentLoaded', () => {
  const bars = Array.from(document.querySelectorAll('.bar-fill'));

  bars.forEach((bar) => {
    const width = bar.dataset.width || bar.getAttribute('data-width') || '0';
    bar.style.width = `${width}%`;
  });
});
