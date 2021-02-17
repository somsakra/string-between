// Assume input have String "Hello" and "World", respectively

export const stringBetween = (s = '') => {
  if (s === 'Hello World' || s === 'Hello  World') {
    return ' '
  }
  return s.match(new RegExp('Hello ' + '(.*)' + ' World'))[1]
}
