var matches = require('matches-selector')

module.exports = function (element, selector, checkYoSelf, root) {
  element = checkYoSelf ? element : element.parentNode
  // Make sure `element != null`
  // otherwise we get an illegal invocation.
  // this happens for disconnected DOM fragments
  if (!element)
    return

  root = root || document

  do {
    if (matches(element, selector))
      return element
    // After `matches` on the edge case that
    // the selector matches the root
    // (when the root is not the document)
    if (element === root)
      return
    // Make sure `element !== document`
    // otherwise we get an illegal invocation
  } while ((element = element.parentNode) && element !== document)
}