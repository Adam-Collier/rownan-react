export const autoFillFromFileDynamic = async ({
  dispatch,
  index,
  blockIndex,
  filteredBlocks,
}) => {
  if (!filteredBlocks[blockIndex]) return

  let block = filteredBlocks[blockIndex].content

  dispatch({ type: 'autoFill', payload: block, index })
}

export const autoFillFromFileStatic = async ({
  dispatch,
  savedJSON,
  blockName,
}) => {
  dispatch({
    type: 'autoFillBlock',
    payload: savedJSON[blockName],
    blockName,
  })
}
