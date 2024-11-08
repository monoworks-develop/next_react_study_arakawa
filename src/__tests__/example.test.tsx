import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Hello World', () => {
  test('Hello', () => {
    expect("Hello" + " World" + " !").toBe("Hello World !")
  })

  test('PASS Case', () => {
    expect(1).toBe(1)
  })

  test('ERROR Case', () => {
    expect(100).toBe(1)
  })
})