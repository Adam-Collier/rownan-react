export default (image, width, type, webp) => {
  let extension = image.split('.').pop()

  if (image.includes('https://media.missguided.com/i/missguided')) {
    if (type === 'category')
      return webp === true
        ? `${image}.webp?w=${width}&fmt.jpeg.interlaced=true`
        : `${image}?w=${width}&fmt.jpeg.interlaced=true`

    if (webp === true)
      return `${image}.webp?bg=rgb(254,245,240)&w=${width}&qlt=60&fmt.jpeg.interlaced=true&upscale=false`

    if (webp === true)
      return `${image}.webp?bg=rgb(254,245,240)&w=${width}&qlt=60&fmt.jpeg.interlaced=true&upscale=false`

    return `${image}?bg=rgb(254,245,240)&w=${width}&qlt=60&fmt.jpeg.interlaced=true&upscale=false`
  }

  if (image.includes('https://media.missguided.co.uk')) {
    let transformImage = transformation => {
      return `${image.slice(0, 44)}${transformation}${image.slice(44)}`
    }
    switch (extension) {
      case 'jpeg':
      case 'jpg': {
        return type === 'lower'
          ? transformImage(`w_600,q_70/`)
          : transformImage(`w_${width},q_70/`)
      }
      case 'png': {
        return type === 'lower'
          ? transformImage(`w_600,q_70,b_rgb:FEF5F0/`).slice(0, -3) + 'jpg'
          : transformImage(`w_${width},q_70/`).slice(0, -3) + 'jpg'
      }
      case 'gif': {
        return type === 'lower'
          ? transformImage(`q_30,w_300/`)
          : transformImage(`q_30,w_300/`)
      }
      default: {
        return ''
      }
    }
  }
  return image
}
