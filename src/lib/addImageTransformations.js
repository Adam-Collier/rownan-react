export default (image, type) => {
  let extension = image.split('.').pop()

  switch (extension) {
    case 'jpeg':
    case 'jpg': {
      return type === 'lower' ? `w_600,q_70${image}` : `,q_70${image}`
    }
    case 'png': {
      let slicedImage = image.slice(0, -3)
      return type === 'lower'
        ? `w_600,q_70,b_rgb:FEF5F0${slicedImage}jpg`
        : `,q_70,b_rgb:FEF5F0${slicedImage}jpg`
    }
    case 'gif': {
      return type === 'lower' ? `q_30,w_300${image}` : `,q_30,w_300${image}`
    }
    default: {
      return ''
    }
  }
}
