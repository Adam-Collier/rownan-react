// get the src image url from the picture element
// remove any transformations that may be on the image

let getImageUrl = (element, index = 0) => {
  // get the source tag
  let sourceTag = Array.from(element.querySelectorAll('source'))[index]
  // grab the srcset
  let srcSet = sourceTag.dataset.srcset
  // grab the first url used (it will have transformations on it)
  let imageWithTransformations = srcSet.split(' ')[0]
  // remove the transformations and the image extension
  let image = imageWithTransformations.split('?')[0].replace(/\.[^/.]+$/, '')
  // return the image
  return image
}

export default getImageUrl
