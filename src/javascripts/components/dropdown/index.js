import Choises from 'choices.js'

document.querySelectorAll('.select select').forEach(el =>
  new Choises(el, {
    searchEnabled: false,
    itemSelectText: '',
  })
)
