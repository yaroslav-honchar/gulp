export const browserDetect = () => {
  let browserClient = null

  let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0

  let isFirefox = typeof InstallTrigger !== "undefined"

  let isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]"
    })(!window["safari"] || (typeof safari !== "undefined" && window["safari"].pushNotification))

  let isIE = /*@cc_on!@*/ false || !!document.documentMode

  let isEdge = !isIE && !!window.StyleMedia

  let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

  let isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") != -1

  let isBlink = (isChrome || isOpera) && !!window.CSS

  if (isOpera) {
    browserClient = "Opera"
  }
  if (isFirefox) {
    browserClient = "Firefox"
  }
  if (isSafari) {
    browserClient = "Safari"
  }
  if (isIE) {
    browserClient = "IE"
  }
  if (isEdge) {
    browserClient = "Edge"
  }
  if (isChrome) {
    browserClient = "Chrome"
  }
  if (isEdgeChromium) {
    browserClient = "EdgeChromium"
  }
  if (isBlink) {
    browserClient = "Blink"
  }

  return browserClient?.toLowerCase()
}
