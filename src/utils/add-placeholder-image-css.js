const addPlaceholderImageCSS = (editorContent, contentBlocks) => {
  let parser = new DOMParser()
  let editorCSS = parser.parseFromString(editorContent, 'text/html')

  if (editorCSS.querySelectorAll('style')[0]) {
    if (!editorCSS.querySelectorAll('style')[0].sheet) {
      return editorContent
    }

    let styleElement = editorCSS.querySelectorAll('style')[0].sheet

    let styleRules = Array.from(styleElement.cssRules)

    let mediaQueryIndexes = styleRules.reduce((arr, curr, index) => {
      if (curr.type === 4) {
        arr.push(index)
      }
      return arr
    }, [])

    if (mediaQueryIndexes.length < 2) return editorContent

    contentBlocks.forEach(({ content: block, type }, i) => {
      if (block.placeholderImage && type === 'hero') {
        styleRules[mediaQueryIndexes[0]].insertRule(
          `.row${i + 1} { background: url("${
            block.placeholderImage
          }"); background-size: contain; background-repeat: no-repeat;
        }`,
          i
        )
      }
      if (block.placeholderMobile) {
        styleRules[mediaQueryIndexes[1]].insertRule(
          `.row${i + 1} { background: url("${
            block.placeholderMobile
          }"); background-size: contain; background-repeat: no-repeat;
        }`,
          i
        )
      }
    })

    let newStyleSheet = document.createElement('style')

    styleRules.forEach((rule) => {
      newStyleSheet.innerHTML += rule.cssText
    })

    return newStyleSheet.outerHTML
  }
  return editorContent
}

export default addPlaceholderImageCSS
