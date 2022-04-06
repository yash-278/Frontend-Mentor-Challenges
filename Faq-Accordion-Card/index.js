function cbChange(obj) {
  var cbs = document.getElementsByClassName("cb");
  for (var i = 0; i < cbs.length; i++) {
    cbs[i].checked = true;
  }
  obj.checked = false;
}
