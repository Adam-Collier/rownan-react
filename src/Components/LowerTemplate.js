import removeEmptyLines from '../lib/removeEmptyLines'
import addImageTransformations from '../lib/addImageTransformations'

const LowerTemplate = blocks => {
  return `<div class="blocker"></div>
    ${blocks
      .map(block => {
        let transformedImage = addImageTransformations(
          block.image,
          '600',
          'lower'
        )

        return removeEmptyLines`<div>
      <a href="${block.url}" class="tracking">
        <div class="imgContainer">
          <img
            class="lazyload"
            data-expand="-50"
            data-src="${transformedImage}"
            src="${
              block.placeholderImage
                ? block.placeholderImage
                : `${transformedImage}`
            }"
            alt="backup_img"
          />
        </div>
        <div class="title-below">
          <h2 class="title3">${block.title}</h2>
          <h4 class="subtitle3">${block.subtitle}</h4>
          <button class="button">${block.cta}</button>
        </div>
      </a>
    </div>`
      })
      .join('')}`
}

export default LowerTemplate
