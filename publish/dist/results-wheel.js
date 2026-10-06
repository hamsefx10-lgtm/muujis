(() => {
  const section = document.querySelector('.results');
  if (!section || !window.matchMedia('(min-width: 901px)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = [...section.querySelectorAll('.result-grid article')];
  const stops = [...section.querySelectorAll('.results-rail span')];
  if (cards.length !== 3 || stops.length !== 3) return;

  let step = 0;
  let distance = 0;
  section.classList.add('results-wheel-scene');

  const paint = () => {
    section.classList.remove('outcome-step-1', 'outcome-step-2', 'outcome-step-3');
    section.classList.add(`outcome-step-${step + 1}`);
    cards.forEach((card, index) => card.toggleAttribute('data-outcome-active', index === step));
    stops.forEach((stop, index) => {
      stop.toggleAttribute('data-outcome-active', index === step);
      stop.toggleAttribute('data-outcome-passed', index < step);
    });
  };

  paint();

  window.addEventListener('wheel', (event) => {
    const bounds = section.getBoundingClientRect();
    const isPinned = bounds.top <= 8 && bounds.bottom >= window.innerHeight - 8;
    if (!isPinned || !event.deltaY) return;

    const direction = Math.sign(event.deltaY);
    if ((direction > 0 && step === cards.length - 1) || (direction < 0 && step === 0)) return;

    event.preventDefault();
    distance += event.deltaY;
    if (Math.abs(distance) < 55) return;

    step = Math.max(0, Math.min(cards.length - 1, step + (distance > 0 ? 1 : -1)));
    distance = 0;
    paint();
  }, { passive: false });
})();
