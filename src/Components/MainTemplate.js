import removeEmptyLines from '../lib/removeEmptyLines'
import addImageTransformations from '../lib/addImageTransformations'

const MainTemplate = blocks =>
  blocks
    .map((block, index) => {
      let transformedImage = addImageTransformations(block.image)
      let transformedMobile = addImageTransformations(block.mobile)

      return removeEmptyLines`<div class="row fullwidth row${index + 1}">
      <a href="${block.primaryUrl}">
        ${transformedImage &&
          `<picture>
            <source media="(max-width: 767px)" sizes="(max-width: 767px) 100vw, 767px" data-srcset="https://media.missguided.co.uk/image/upload/c_fill,c_scale,w_300${transformedMobile} 300w, https://media.missguided.co.uk/image/upload/w_402${transformedMobile} 402w, https://media.missguided.co.uk/image/upload/w_491${transformedMobile} 491w, https://media.missguided.co.uk/image/upload/w_569${transformedMobile} 569w, https://media.missguided.co.uk/image/upload/w_639${transformedMobile} 639w, https://media.missguided.co.uk/image/upload/w_711${transformedMobile} 711w, https://media.missguided.co.uk/image/upload/w_756${transformedMobile} 756w, https://media.missguided.co.uk/image/upload/w_767${transformedMobile} 767w">
            <source sizes="(max-width: 1920px) 100vw, 1920px" data-srcset="https://media.missguided.co.uk/image/upload/w_768${transformedImage} 768w, https://media.missguided.co.uk/image/upload/w_937${transformedImage} 937w, https://media.missguided.co.uk/image/upload/w_1086${transformedImage} 1086w, https://media.missguided.co.uk/image/upload/w_1226${transformedImage} 1226w, https://media.missguided.co.uk/image/upload/w_1353${transformedImage} 1353w, https://media.missguided.co.uk/image/upload/w_1474${transformedImage} 1474w, https://media.missguided.co.uk/image/upload/w_1582${transformedImage} 1582w, https://media.missguided.co.uk/image/upload/w_1686${transformedImage} 1686w, https://media.missguided.co.uk/image/upload/w_1792${transformedImage} 1792w, https://media.missguided.co.uk/image/upload/w_1905${transformedImage} 1905w, https://media.missguided.co.uk/image/upload/w_1920${transformedImage} 1920w" alt="image failed">
            <img class="lazyload" data-expand="-50" data-src="https://media.missguided.co.uk/image/upload/w_1920${transformedImage}" src="${
            block.placeholderImage
              ? block.placeholderImage
              : `https://media.missguided.co.uk/image/upload/w_1920${transformedImage}`
          }" alt="backup">
        </picture>`}
        <div class="banner_content center">
          ${block.svg && `${block.svg}`}
          ${block.title && `<h2 class="title1 white">${block.title}</h2>`}
          ${block.subtitle &&
            `<h4 class="subtitle1 white">${block.subtitle}</h4>`}
          ${block.primaryCta &&
            `<div class="more-buttons">
            <button class="button">${block.primaryCta}</button>
            ${block.secondaryCta &&
              `<a href="${block.secondaryUrl}">
              <button class="button">${block.secondaryCta}</button>
            </a>`}
          </div>`}
        </div>
      </a>
    </div>`
    })
    .join('')

export default MainTemplate
