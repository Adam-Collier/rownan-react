export default (editorContent, contentBlocks) => {
  let parser = new DOMParser()
  let editorCSS = parser.parseFromString(editorContent, 'text/html')

  if (editorCSS.querySelectorAll('style')[0]) {
    if (!editorCSS.querySelectorAll('style')[0].sheet) {
      return editorContent
    }

    let styleElement = editorCSS.querySelectorAll('style')[0].sheet

    contentBlocks.forEach(({ content: block, type }, i) => {
      if (block.placeholderImage && type === 'main') {
        styleElement.cssRules[1].insertRule(
          `.row${i + 1} { background: url("${
            block.placeholderImage
          }"); background-size: contain; background-repeat: no-repeat;
        }`,
          i
        )
      }
      if (block.placeholderMobile) {
        styleElement.cssRules[2].insertRule(
          `.row${i + 1} { background: url("${
            block.placeholderMobile
          }"); background-size: contain; background-repeat: no-repeat;
        }`,
          i
        )
      }
    })

    let newStyleSheet = document.createElement('style')
    Array.from(styleElement.cssRules).forEach(rule => {
      newStyleSheet.innerHTML += rule.cssText
    })

    return newStyleSheet.outerHTML
  }
  return editorContent
}
