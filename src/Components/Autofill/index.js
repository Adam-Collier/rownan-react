import styled from 'styled-components'
import fillIcon from '../../icons/autoFill.svg'
import { convertEmojis } from '../../lib/emojiConvert'

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
  e.target[e.target.selectedIndex].getAttribute('data-file') ? true : false

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

export const createDynamicBlock = (el, type) => {
  if (type === 'lower') {
    let subtitle = el.querySelector('.subtitle3')
    let title = el.querySelector('.title3')

    return {
      cta: el.querySelector('button').textContent,
      image: removeTransformations(el.querySelector('img').dataset.src),
      subtitle: subtitle ? subtitle.textContent : '',
      title: title ? title.textContent : '',
      url: el.getAttribute('href')
    }
  } else if (type === 'main') {
    let srcSet = el.querySelector('source').dataset.srcset
    let urls = el.querySelectorAll('a')
    let buttons = el.querySelectorAll('button')
    let subtitle = el.querySelector('.subtitle1')
    let title = el.querySelector('.title1')

    return {
      image: removeTransformations(el.querySelector('img').dataset.src),
      mobile: removeTransformations(srcSet.match(/^https:[^ ]+/gi)[0]),
      primaryCta: buttons[0].textContent,
      primaryUrl: urls[0].getAttribute('href'),
      secondaryCta: buttons[1] ? buttons[1].textContent : '',
      secondaryUrl: urls[1] ? urls[1].getAttribute('href') : '',
      subtitle: subtitle ? subtitle.textContent : '',
      svg: el.querySelector('svg').outerHTML,
      title: title ? title.textContent : ''
    }
  } else if (type === 'sale') {
    let ctas = Array.from(el.querySelectorAll('a')).map(cta => {
      let url = cta.getAttribute('href')
      let text = cta.querySelector('button').textContent

      return {
        url,
        text
      }
    })

    return {
      title: el.querySelector('h2').textContent.trim(),
      ctas
    }
  }
}

export const createStaticBlock = (allElements, blockName) => {
  if (blockName === 'categories') {
    return allElements.map(category => {
      let image = removeTransformations(
        category.querySelector('.category-tile__image').dataset.src.trim()
      )
      let url = category.getAttribute('href').trim()
      let title = category
        .querySelector('.category-tile__heading')
        .textContent.trim()

      return {
        image,
        url,
        title
      }
    })
  } else if (blockName === 'promoBlocks') {
    return allElements.map(promo => {
      let url = promo
        .querySelector('a')
        .getAttribute('href')
        .trim()
      let title = promo.querySelector('h3').innerHTML.trim()

      title = convertEmojis(title)

      return {
        url,
        title
      }
    })
  } else if (blockName === 'saleCategories') {
    return allElements.map(category => {
      let image = removeTransformations(
        category.querySelector('.category-tile__image').dataset.src
      ).trim()
      let url = category.getAttribute('href').trim()

      return {
        image,
        url
      }
    })
  }
}
