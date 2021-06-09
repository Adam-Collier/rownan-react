import removeEmptyLines from '../../utils/remove-empty-lines'
import createPictureElement from '../../utils/createPictureElement'

const LowerTemplate = (blocks) => {
  return `<div class="blocker"></div>
    ${blocks
      .map((block) => {
        return removeEmptyLines/*HTML*/ `<div class="lower-slot">
          <a href="${block.url}" class="tracking">
            ${
              block.image &&
              createPictureElement({
                src: block.image,
                breakpoints: [224, 281, 294, 310, 350, 441, 588],
                alt: 'lower image',
                sizes: '(max-width: 767px) 75vw, 294px',
              })
            }
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
