// Before/after slider: the range input moves the split line.
document.querySelectorAll('.ba-slider').forEach(function (box) {
  var input = box.querySelector('input');
  if (!input) return;
  var set = function () { box.style.setProperty('--pos', input.value + '%'); };
  input.addEventListener('input', set);
  set();
});
