import { stringBetween } from './stringBetween'

describe('String between "Hello" and "World"', () => {
  test('Hello World', () => {
    expect(stringBetween('Hello World')).toBe(' ')
  })

  test('Hello  World', () => {
    expect(stringBetween('Hello  World')).toBe(' ')
  })

  test('Hello   World', () => {
    expect(stringBetween('Hello   World')).toBe(' ')
  })

  test('Normal input', () => {
    expect(stringBetween('Hello 1234 World')).toBe('1234')
  })

  test('Some String infront', () => {
    expect(stringBetween('123 Hello 1234 World')).toBe('1234')
  })

  test('Some String behind', () => {
    expect(stringBetween('Hello 1234 World 123')).toBe('1234')
  })

  test('Some String infront & behind', () => {
    expect(stringBetween('123 Hello 1234 World 123')).toBe('1234')
  })

  test('Multiple Hello', () => {
    expect(stringBetween('Hello Hello 1234 World')).toBe('Hello 1234')
  })

  test('Multiple World', () => {
    expect(stringBetween('Hello 1234 World World')).toBe('1234 World')
  })

  test('Multiple Hello & World', () => {
    expect(stringBetween('Hello Hello 1234 World World')).toBe(
      'Hello 1234 World'
    )
  })
  xtest('World Hello', () => {
    expect(stringBetween('World Hello')).toBe('handle World Hello')
  })
})
