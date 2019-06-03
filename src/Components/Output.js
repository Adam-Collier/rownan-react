import { useAppState } from '../state-context'
import MainSlots from './MainSlots'
import LowerSlots from './LowerSlots'

const Output = props => {
  const { editorCode, contentBlocks } = useAppState()

  let mainBlocks = [],
    lowerBlocks = []

  contentBlocks.map(block => {
    console.log(block)
    if (block.type === 'main') mainBlocks.push(block.content)
    if (block.type === 'lower') lowerBlocks.push(block.content)
    return null
  })

  console.log(MainSlots(mainBlocks))

  return `
${editorCode}
<div class="container">
  <div id="homeSlider">
    ${MainSlots(mainBlocks)}
  </div>
  <div class="slick-three">
    ${LowerSlots(lowerBlocks)}
  </div>
</div>
  `
}

export default Output
