import removeEmptyLines from '../lib/removeEmptyLines'

const MainTemplate = blocks =>
  blocks
    .map(
      (block, index) => removeEmptyLines`<div class="row fullwidth row${index +
        1}">
      <a href="${block.primaryUrl}">
        ${block.image &&
          `<picture>
            <source media="(max-width: 767px)" sizes="(max-width: 767px) 100vw, 767px" data-srcset="https://media.missguided.co.uk/image/upload/c_fill,c_scale,w_300${
              block.mobile
            } 300w, https://media.missguided.co.uk/image/upload/w_402,q_70${
            block.mobile
          } 402w, https://media.missguided.co.uk/image/upload/w_491,q_70${
            block.mobile
          } 491w, https://media.missguided.co.uk/image/upload/w_569,q_70${
            block.mobile
          } 569w, https://media.missguided.co.uk/image/upload/w_639,q_70${
            block.mobile
          } 639w, https://media.missguided.co.uk/image/upload/w_711,q_70${
            block.mobile
          } 711w, https://media.missguided.co.uk/image/upload/w_756,q_70${
            block.mobile
          } 756w, https://media.missguided.co.uk/image/upload/w_767,q_70${
            block.mobile
          } 767w">
            <source sizes="(max-width: 1920px) 100vw, 1920px" data-srcset="https://media.missguided.co.uk/image/upload/w_768,q_70${
              block.image
            } 768w, https://media.missguided.co.uk/image/upload/w_937,q_70${
            block.image
          } 937w, https://media.missguided.co.uk/image/upload/w_1086,q_70${
            block.image
          } 1086w, https://media.missguided.co.uk/image/upload/w_1226,q_70${
            block.image
          } 1226w, https://media.missguided.co.uk/image/upload/w_1353,q_70${
            block.image
          } 1353w, https://media.missguided.co.uk/image/upload/w_1474,q_70${
            block.image
          } 1474w, https://media.missguided.co.uk/image/upload/w_1582,q_70${
            block.image
          } 1582w, https://media.missguided.co.uk/image/upload/w_1686,q_70${
            block.image
          } 1686w, https://media.missguided.co.uk/image/upload/w_1792,q_70${
            block.image
          } 1792w, https://media.missguided.co.uk/image/upload/w_1905,q_70${
            block.image
          } 1905w, https://media.missguided.co.uk/image/upload/w_1920,q_70${
            block.image
          } 1920w" alt="image failed">
            <img class="lazyload" data-expand="-50" data-src="https://media.missguided.co.uk/image/upload/w_1920,q_70${
              block.image
            }" src="${
            block.placeholderImage
              ? block.placeholderImage
              : `https://media.missguided.co.uk/image/upload/w_1920,q_70${
                  block.image
                }`
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
    )
    .join('')

export default MainTemplate
