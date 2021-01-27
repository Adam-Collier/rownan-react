import styled from 'styled-components'

import fillIcon from '../../icons/autoFill.svg'
const fs = window.require('fs-extra')
const { dialog } = window.require('electron').remote

export const IconContent = styled.div`
  > select {
    appearance: none;
    background: url(${fillIcon});
    border: none;
    color: transparent;
    position: absolute;
    right: 32px;
    width: 26px;
    height: 26px;
    top: calc(46% - 7px);
    transform: translateY(-50%);
    cursor: pointer;
  }
  .categories {
    right: 0;
  }
`

export const trimWhiteSpace = obj => {
  Object.keys(obj).forEach(key => {
    obj[key] = obj[key].trim()
  })
}

export const removeTransformations = url => {
  if (url.includes('https://media.missguided.co.uk')) {
    let arr = url.split('/')

    if (arr[5].includes('w_')) {
      arr.splice(5, 1)
      return arr.join('/')
    }

    return arr.join('/')
  }
  if (
    url.includes('https://i1.adis.ws/i/missguided') ||
    url.includes('https://media.missguided.com/i/missguided')
  ) {
    return url.split('?')[0]
  }
}

export const isFromFileCheck = e =>
  e.target[e.target.selectedIndex].getAttribute('data-file')

export const getFileJSON = async () => {
  const { filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ extensions: ['json'] }]
  })

  if (filePaths) {
    return JSON.parse(fs.readFileSync(filePaths[0], 'utf8'))
  } else {
    return null
  }
}

// export const autoFillFromFile = async (dispatch, index, value, type) => {
//   const { filePaths } = await dialog.showOpenDialog({
//     properties: ['openFile'],
//     filters: [{ extensions: ['json'] }]
//   })

//   if (filePaths) {
//     let file = JSON.parse(fs.readFileSync(filePaths[0], 'utf8'))

//     console.log(file)

//     switch (type) {
//     }

//     if (type === 'main' || type === 'lower') {
//       let contentBlocks = file.contentBlocks.filter(block => {
//         return block.type === type
//       })

//       let blockIndex =
//         type === 'main'
//           ? parseInt(value.substring(3, 4)) - 1
//           : value.substring(0, 1)

//       if (!contentBlocks[blockIndex]) return

//       let block = contentBlocks[blockIndex].content

//       let imageArr =
//         type === 'main' ? [block.image, block.mobile] : [block.image]

//       imageArr.forEach((x, i) => {
//         placeholderImage(x).then(placeholder => {
//           dispatch({
//             type: 'placeholderImage',
//             name: i === 0 ? 'image' : 'mobile',
//             index,
//             payload: placeholder
//           })
//         })
//       })
//       console.log(block, 'this is the block')
//       dispatch({ type: 'autoFill', payload: block, index })
//     } else if (type === 'sale') {
//       let saleContentBlocks = file.contentBlocks.filter(
//         block => block.type === type
//       )

//       let saleBlockIndex = value.substring(0, 1)

//       if (!saleContentBlocks[saleBlockIndex]) return

//       dispatch({
//         type: 'autoFill',
//         payload: saleContentBlocks[saleBlockIndex].content,
//         index
//       })
//     } else if (type.toLowerCase().includes('categories')) {
//       dispatch({
//         type: 'autoFillBlock',
//         payload: file[type],
//         blockName: type
//       })
//     }
//   }
// }

// let createBlock = (el, type) => {
//   if (type === 'lower') {
//     let subtitle = el.querySelector('.subtitle3')
//     let title = el.querySelector('.title3')

//     return {
//       cta: el.querySelector('button').textContent,
//       image: removeTransformations(el.querySelector('img').dataset.src),
//       subtitle: subtitle ? subtitle.textContent : '',
//       title: title ? title.textContent : '',
//       url: el.getAttribute('href')
//     }
//   } else if (type === 'main') {
//     let srcSet = el.querySelector('source').dataset.srcset
//     let urls = el.querySelectorAll('a')
//     let buttons = el.querySelectorAll('button')
//     let subtitle = el.querySelector('.subtitle1')
//     let title = el.querySelector('.title1')

//     return {
//       image: removeTransformations(el.querySelector('img').dataset.src),
//       mobile: removeTransformations(srcSet.match(/^https:[^ ]+/gi)[0]),
//       primaryCta: buttons[0].textContent,
//       primaryUrl: urls[0].getAttribute('href'),
//       secondaryCta: buttons[1] ? buttons[1].textContent : '',
//       secondaryUrl: urls[1] ? urls[1].getAttribute('href') : '',
//       subtitle: subtitle ? subtitle.textContent : '',
//       svg: el.querySelector('svg').outerHTML,
//       title: title ? title.textContent : ''
//     }
//   } else if (type === 'sale') {
//     let ctas = Array.from(el.querySelectorAll('a')).map(cta => {
//       let url = cta.getAttribute('href')
//       let text = cta.querySelector('button').textContent

//       return {
//         url,
//         text
//       }
//     })

//     return {
//       title: el.querySelector('h2').textContent.trim(),
//       ctas
//     }
//   }
// }

// let autoFillFromSite = async (
//   dispatch,
//   index,
//   value,
//   territory,
//   type,
//   selector
// ) => {
//   if (value === 'default') return

//   let { data } = await axios.get(territory.url)
//   let parser = new DOMParser()
//   let html = parser.parseFromString(data, 'text/html')

//   let el =
//     type === 'main'
//       ? html.querySelector(`.${value}`)
//       : html.querySelectorAll(selector)[value]

//   if (el === null) return

//   let block = createBlock(el, type)

//   if (type === 'main' || type === 'lower') {
//     trimWhiteSpace(block)

//     let imageArr = type === 'main' ? [block.image, block.mobile] : [block.image]

//     imageArr.forEach((x, i) => {
//       placeholderImage(x).then(placeholder => {
//         dispatch({
//           type: 'placeholderImage',
//           name: i === 0 ? 'image' : 'mobile',
//           index,
//           payload: placeholder
//         })
//       })
//     })
//   }

//   dispatch({ type: 'autoFill', payload: block, index })
// }
