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
  return /*HTML*/ `
    <div class="row-placeholder">
        <picture>
            ${
              isArtDirected &&
              artDirectedImages.map(({ src, breakpoints }) => {
                return imageTypes
                  .map(
                    (type) => `
                <source
                type="image/${type}"
                data-srcset="${breakpoints
                  .map((size) => `${src}.${type}?w=${size}&qlt=70 ${size}w`)
                  .join(',')}"
                sizes="${sizes}"
                media="(max-width: 767px)"
                />
            `
                  )
                  .join('')
              })
            }

            ${imageTypes
              .map(
                (type) => `
                <source
                type="image/${type}"
                data-srcset="${breakpoints
                  .map(
                    (size) =>
                      `${defaultImage}.${type}?w=${size}&qlt=70 ${size}w`
                  )
                  .join(',')}"
                sizes="${sizes}"
                />
            `
              )
              .join('')}
            <img class="${
              className || ''
            } lazyload" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="backup">
        </picture>
    </div>
    `
}

export default createPictureElement
