import removeEmptyLines from '../lib/removeEmptyLines'
import addImageTransformations from '../lib/addImageTransformations'

const MainTemplate = blocks =>
  blocks
    .map((block, index) => {
      let mobileBreakPoints = [300, 402, 491, 569, 639, 711, 756, 767]
      let desktopBreakPoints = [
        768,
        937,
        1086,
        1226,
        1353,
        1474,
        1582,
        1686,
        1792,
        1905
      ]

      return removeEmptyLines`<div class="row fullwidth row${index + 1}">
      <a href="${block.primaryUrl}">
        ${block.image &&
          `<picture>
            <source type="image/webp" media="(max-width: 767px)" sizes="(max-width: 767px) 100vw"
              data-srcset="${mobileBreakPoints
                .map(width => {
                  return `${addImageTransformations(
                    block.mobile,
                    width,
                    true
                  )} ${width}w`
                })
                .join(',\n              ')}">
            <source media="(max-width: 767px)" sizes="(max-width: 767px) 100vw" 
              data-srcset="${mobileBreakPoints
                .map(width => {
                  return `${addImageTransformations(
                    block.mobile,
                    width
                  )} ${width}w`
                })
                .join(',\n              ')}">
            <source
            type="image/webp"
            sizes="(min-width: 768px) 100vw"
            data-srcset="${desktopBreakPoints
              .map(width => {
                return `${addImageTransformations(
                  block.image,
                  width,
                  'main',
                  true
                )} ${width}w`
              })
              .join(',\n              ')}" 
              alt="image failed">
            <source 
            sizes="(min-width: 768px) 100vw" 
            data-srcset="${desktopBreakPoints
              .map(width => {
                return `${addImageTransformations(
                  block.image,
                  width
                )} ${width}w`
              })
              .join(',\n              ')}" 
              alt="image failed">
            <img class="lazyload" data-expand="-50" data-src="${addImageTransformations(
              block.image,
              '1920'
            )}" src="${
            block.placeholderImage
              ? block.placeholderImage
              : `${addImageTransformations(block.image, '1920')}`
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
