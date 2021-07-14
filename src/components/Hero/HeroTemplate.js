import removeEmptyLines from '../../utils/remove-empty-lines'
import createPictureElement from '../../utils/createPictureElement'

const HeroTemplate = (blocks) =>
  blocks
    .map((block, index) => {
      return removeEmptyLines/*HTML*/ `
    <div class="hero-banner row fullwidth row${index + 1}">
      <a href="${block.primaryUrl}">
        ${
          block.image &&
          createPictureElement({
            src: [
              block.image,
              {
                src: block.mobile,
                breakpoints: [300, 402, 491, 569, 639, 711, 756, 767],
              },
            ],
            breakpoints: [
              768,
              937,
              1086,
              1226,
              1353,
              1474,
              1582,
              1686,
              1792,
              1905,
            ],
            alt: 'hero image',
          })
        }
        <div class="banner_content center">
          ${block.svg && `${block.svg}`}
          ${block.title && `<h2 class="title1 white">${block.title}</h2>`}
          ${
            block.subtitle &&
            `<h4 class="subtitle1 white">${block.subtitle}</h4>`
          }
          ${
            block.primaryCta &&
            `<div class="more-buttons">
              <button class="button">${block.primaryCta}</button>
              ${
                block.secondaryCta &&
                `<a href="${block.secondaryUrl}">
                  <button class="button">${block.secondaryCta}</button>
                </a>`
              }
            </div>`
          }
        </div>
        ${block.terms && `<p class="hero-terms">${block.terms}</p>`}
      </a>
    </div>`
    })
    .join('')

export default HeroTemplate
