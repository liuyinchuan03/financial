(function (window) { var svgSprite = '<svg><symbol id="icon-12" viewBox="0 0 1024 1024"><path d="M139.5 610.2l417.2 0 0 29.8-417.2 0 0-29.8Z"  ></path><path d="M139.5 703.896l268.2 0 0 29.801-268.2 0 0-29.801Z"  ></path><path d="M953.762 219.282C950.27 215.761 945.7 214 941.117 214L82.883 214c-4.583 0-9.152 1.761-12.645 5.282C66.746 222.818 65 227.431 65 232.058L65 363l0 89.4 0 339.527c0 4.628 1.746 9.255 5.238 12.776C73.73 808.239 78.299 810 82.883 810l858.234 0c4.583 0 9.152-1.761 12.645-5.296 3.492-3.521 5.238-8.148 5.238-12.776L959 452.4 959 363 959 232.058C959 227.431 957.254 222.818 953.762 219.282zM929.2 780.2 94.8 780.2l0.967-302.417 834.4 0L929.2 780.2zM930.167 447.983l-834.4 0L94.8 349.915l834.4 0L930.167 447.983zM929.2 320.115 94.8 320.115 94.8 243.8l834.4 0L929.2 320.115z"  ></path></symbol><symbol id="icon-jiantou" viewBox="0 0 1024 1024"><path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"  ></path></symbol><symbol id="icon-shouye" viewBox="0 0 1024 1024"><path d="M960.856566 463.515152L586.294949 88.824242c-20.428283-20.428283-47.450505-31.547475-76.282828-31.547474s-55.854545 11.248485-76.282828 31.547474L63.046465 459.636364c-9.050505 9.050505-9.050505 23.789899 0 32.969697 9.050505 9.050505 23.789899 9.050505 32.969697 0l38.141414-38.141415v369.519192c0 38.141414 14.610101 73.955556 41.115151 100.848485 26.634343 27.022222 62.319192 42.020202 100.460606 42.020202h469.333334c79.127273 0 143.515152-64.129293 143.515151-142.868687V456.921212l39.434344 39.434344c4.525253 4.525253 10.472727 6.852525 16.420202 6.852525s11.894949-2.327273 16.420202-6.852525c9.179798-9.050505 9.179798-23.789899 0-32.840404zM621.20404 920.177778h-218.50505v-250.828283c0-9.309091 7.49899-16.808081 16.808081-16.808081h184.888889c9.309091 0 16.808081 7.49899 16.80808 16.808081v250.828283z m220.832324-96.323233c0 53.139394-43.442424 96.323232-96.969697 96.323233h-77.317172v-250.828283c0-34.909091-28.444444-63.353535-63.353535-63.353535h-184.888889c-34.909091 0-63.353535 28.444444-63.353536 63.353535v250.828283h-80.549495c-52.363636 0-95.030303-43.183838-95.030303-96.323233v-415.030303H179.668687l287.030303-287.030303c11.636364-11.636364 27.022222-17.971717 43.313131-17.971717s31.806061 6.335354 43.313132 17.971717l288.581818 288.581819v413.478787z" fill="" ></path></symbol></svg>'; var script = (function () { var scripts = document.getElementsByTagName('script'); return scripts[scripts.length - 1] }()); var shouldInjectCss = script.getAttribute('data-injectcss'); var ready = function (fn) { if (document.addEventListener) { if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) { setTimeout(fn, 0) } else { var loadFn = function () { document.removeEventListener('DOMContentLoaded', loadFn, false); fn() }; document.addEventListener('DOMContentLoaded', loadFn, false) } } else if (document.attachEvent) { IEContentLoaded(window, fn) } function IEContentLoaded (w, fn) { var d = w.document, done = false, init = function () { if (!done) { done = true; fn() } }; var polling = function () { try { d.documentElement.doScroll('left') } catch (e) { setTimeout(polling, 50); return }init() }; polling(); d.onreadystatechange = function () { if (d.readyState == 'complete') { d.onreadystatechange = null; init() } } } }; var before = function (el, target) { target.parentNode.insertBefore(el, target) }; var prepend = function (el, target) { if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } }; function appendSvg () { var div, svg; div = document.createElement('div'); div.innerHTML = svgSprite; svgSprite = null; svg = div.getElementsByTagName('svg')[0]; if (svg) { svg.setAttribute('aria-hidden', 'true'); svg.style.position = 'absolute'; svg.style.width = 0; svg.style.height = 0; svg.style.overflow = 'hidden'; prepend(svg, document.body) } } if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>') } catch (e) { console && console.log(e) } }ready(appendSvg) })(window)