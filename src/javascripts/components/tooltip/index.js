import tippy from 'tippy.js';

const tip = tippy('.catalog-item__rare', {
  placement: 'bottom',
  duration: 300,
  distance: 5
})


window.addEventListener('scroll', function () {
  const poppers = document.querySelectorAll('.tippy-popper')

  for (const popper of poppers) {
    const tooltip = popper._reference._tippy

    if (tooltip.state.visible) {
      tooltip.popperInstance.disableEventListeners()
      tooltip.hide()
    }
  }
})

if (window.matchMedia("screen and (min-width: 768px)").matches) {
  tip.destroyAll()
}
