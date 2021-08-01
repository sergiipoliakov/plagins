const refs = {
  controns: document.querySelector('[data-controls]'),
  panes: document.querySelector('[data-panes]'),
};
console.log(refs);

refs.controns.addEventListener('click', event => {
  event.preventDefault();

  console.log(event.target);
  if (event.target.nodeName !== 'A') {
    console.log('кликнцли не в сылку');
    return;
  }

  const currentActiveControlItem = refs.controns.querySelector(
    '.controls__item--active',
  );
  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('controls__item--active');

    const paneId = getPaneId(currentActiveControlItem);
    const pane = getPaneById(paneId);

    pane.classList.remove('pane--active');
  }
  const controlItem = event.target;
  controlItem.classList.add('controls__item--active');

  //   console.log(currentActiveControlItem);

  const paneId = controlItem.getAttribute('href').slice(1);
  //   console.log(paneId);

  const pane = getPaneById(paneId);
  //   console.log(pane);
  pane.classList.add('pane--active');
});

function getPaneId(control) {
  return control.getAttribute('href').slice(1);
}

function getPaneById(id) {
  return refs.panes.querySelector(`#${id}`);
}
