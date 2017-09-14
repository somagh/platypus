export const toFaDigit = input =>
  input.replace(/\d+/g, digit => {
    let ret = ''
    for (let i = 0, len = digit.length; i < len; i += 1) {
      ret += String.fromCharCode(digit.charCodeAt(i) + 1728)
    }
    return ret
  })

export const commaSeparateNumber = val => {
  if (val == undefined) {
    return undefined
  }
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + '،' + '$2')
  }
  return val
}
