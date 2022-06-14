// instead of inlining the row padding styles I think it makes more sense to add these seperately in the CSS, that way we can use media queries too.
const createPictureElement = ({
  src,
  className,
  sizes = '100vw',
  breakpoints,
}) => {
  // check if the image is art directed
  const isArtDirected = Array.isArray(src)

  let defaultImage = isArtDirected ? src[0] : src
  let artDirectedImages

  if (isArtDirected) {
    ;[, ...artDirectedImages] = src
  }

  let imageTypes = ['webp', 'jpeg']

  let addTransformation = (size, type) => {
    let quality = 70

    if (type === 'jpeg') {
      return `w=${size}&qlt=${quality}&fmt.jpeg.interlaced=true&upscale=false`
    } else if (type === 'webp') {
      return `w=${size}&qlt=${quality}`
    }
  }

  // IS ART DIRECTED AND STATIC... AKA A GIF
  // CHECK IF THE IMAGE IS A GIF
  let renderSrcSet = ({ breakpoints, src, type }) => {
    if (breakpoints) {
      return `
            data-srcset="${breakpoints
              .map(
                (size) =>
                  `${src}.${type}?${addTransformation(size, type)} ${size}w`
              )
              .join(',')}"
    `
    } else {
      return `data-srcset="${src}"`
    }
  }

  return /*HTML*/ `
    <div class="img-placeholder ${className || ''} ">
        <picture>
            ${
              isArtDirected
                ? artDirectedImages.map(({ src, breakpoints }) => {
                    return imageTypes
                      .map(
                        (type) => `
                <source
                type="image/${type}"
                ${renderSrcSet({ src, breakpoints, type })}
                sizes="${sizes}"
                media="(max-width: 767px)"
                />
            `
                      )
                      .join('')
                  })
                : ''
            }

            ${imageTypes
              .map(
                (type) => `
                <source
                type="image/${type}"
                ${renderSrcSet({ src: defaultImage, breakpoints, type })}
                sizes="${sizes}"
                />
            `
              )
              .join('')}
            <img class="lazyload" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="backup">
        </picture>
    </div>
    `
}

export default createPictureElement
