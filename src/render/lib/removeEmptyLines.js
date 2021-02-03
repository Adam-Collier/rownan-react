let removeEmptyLines = (strings, ...values) => {
  return strings
    .map((line, i) => {
      if (strings.length - 1 === i) {
        return line + '\n    '
      } else if (line.trim().length || values[i]) {
        return values[i] !== undefined ? line + values[i] : line
      } else {
        return null
      }
    })
    .join('')
}

export default removeEmptyLines
