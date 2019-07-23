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
          <picture>
            <source
              type="image/webp"
              media="(min-width: 768px)"
              data-srcset="${addImageTransformations(
                block.image,
                '350',
                'lower',
                true
              )}" 
                alt="image failed">
            <source
              media="(min-width: 768px)"
              data-srcset="${addImageTransformations(
                block.image,
                '350',
                'lower',
                false
              )}" 
                alt="image failed">
            <source
              type="image/webp"
              media="(max-width: 767px)"
              data-srcset="${addImageTransformations(
                block.image,
                '600',
                'lower',
                true
              )}" 
                alt="image failed">
            <source
              media="(max-width: 767px)"
              data-srcset="${addImageTransformations(
                block.image,
                '600',
                'lower',
                false
              )}" 
                alt="image failed">
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
          </picture>
          
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
