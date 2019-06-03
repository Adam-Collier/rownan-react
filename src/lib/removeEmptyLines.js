let removeEmptyLines = (strings, ...values) => {
  console.log(strings)
  return strings
    .map((line, i) => {
      if (line.trim().length || values[i]) {
        return values[i] !== undefined ? line + values[i] : line
      }
    })
    .join('')
}

export default removeEmptyLines
