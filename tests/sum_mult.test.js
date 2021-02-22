const sum = require('../src/sum')
const mult = require('../src/mult')

it('should return correct sum', async() => {
    const result = sum(2, 5)
    expect(result).toBe(7)
})

it('should return a correct multiplication', async() => {
    const result = mult(5, 5)
    expect(result).toBe(25)
})