window.onresize = resizePage
resizePage()

function resizePage () {
  var current = document.documentElement.clientWidth
  document.documentElement.style.fontSize = current * 100 / 750 + 'px'
}
