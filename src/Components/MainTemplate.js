import removeEmptyLines from '../lib/removeEmptyLines'
import addImageTransformations from '../lib/addImageTransformations'

const MainTemplate = blocks =>
  blocks
    .map((block, index) => {
      let transformedImage = addImageTransformations(block.image)
      let transformedMobile = addImageTransformations(block.mobile)

      let transformations = '&qlt=70&fmt.jpeg.interlaced=true'

      return removeEmptyLines`<div class="row fullwidth row${index + 1}">
      <a href="${block.primaryUrl}">
        ${transformedImage &&
          `<picture>
            <source media="(max-width: 767px)" sizes="(max-width: 767px) 100vw, 767px" 
              data-srcset="${transformedMobile}?w=300${transformations} 300w, 
              ${transformedMobile}?w=402${transformations} 402w, 
              ${transformedMobile}?w=491${transformations} 491w, 
              ${transformedMobile}?w=569${transformations} 569w, 
              ${transformedMobile}?w=639${transformations} 639w, 
              ${transformedMobile}?w=711${transformations} 711w, 
              ${transformedMobile}?w=756${transformations} 756w, 
              ${transformedMobile}?w=767${transformations} 767w">
            <source sizes="(max-width: 1920px) 100vw, 1920px" 
            data-srcset="${transformedImage}?w=768 768w, 
              ${transformedImage}?w=937${transformations} 937w, 
              ${transformedImage}?w=1086${transformations} 1086w, 
              ${transformedImage}?w=1226${transformations} 1226w, 
              ${transformedImage}?w=1353${transformations} 1353w, 
              ${transformedImage}?w=1474${transformations} 1474w, 
              ${transformedImage}?w=1582${transformations} 1582w, 
              ${transformedImage}?w=1686${transformations} 1686w, 
              ${transformedImage}?w=1792${transformations} 1792w, 
              ${transformedImage}?w=1905${transformations} 1905w, 
              ${transformedImage}?w=1920${transformations} 1920w" alt="image failed">
            <img class="lazyload" data-expand="-50" data-src="${transformedImage}?w=1920${transformations}" src="${
            block.placeholderImage
              ? block.placeholderImage
              : `${transformedImage}?w=1920`
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
