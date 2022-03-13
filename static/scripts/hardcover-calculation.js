function gross() {
  var form = document.calculation;
  var trim = 18; // Beschnittzugabe
  var joint = 5; // Gelenk

  form.grossWidth.value =
    parseInt(form.width.value) * 2 +
    parseInt(form.strength.value) +
    (trim + joint) * 2;

  form.grossHeight.value =
    parseInt(form.height.value) +
    trim * 2;
}
