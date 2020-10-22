const randomNumber = jest.fn(() => Math.floor(Math.random() * 49) + 1  )
const drawLottery = jest.fn((lotteryNumbers) => {
  while(lotteryNumbers.length < 6) {
    let currentNumber = randomNumber()
    if(!lotteryNumbers.includes(currentNumber)) {
      lotteryNumbers.push(currentNumber)
    }
  }
})
const sortAscending = jest.fn(arr => arr.sort((a,b)=>a-b))
const isInteger = value => Number.isInteger(value)

describe("lottery", () => {
  let lotteryNumbers = []
  beforeEach( () => {
    drawLottery(lotteryNumbers)
    sortAscending(lotteryNumbers)
  })
  it("Check there is 6 Numbers", () => {
    expect(lotteryNumbers.length).toBe(6)
  })
  it("Check is numeric", () => {
    for(let i = 0; i< lotteryNumbers.length; i++) {
      expect(isInteger(2)).toBe(true)
    }
  })
  it("Check ascending order and unique numbers", () => {
      for(let i = 0; i< lotteryNumbers.length; i++) {
        if(i !== lotteryNumbers.length - 1) {
          expect(lotteryNumbers[i]).toBeLessThan(lotteryNumbers[i+1])
        }
      }
  })
  it("Check min and max", () => {
    expect(lotteryNumbers[0]).toBeGreaterThanOrEqual(0)
    expect(lotteryNumbers[lotteryNumbers.length - 1]).toBeLessThanOrEqual(49)
  })
})


// Write a function that will return random numbers for a lottery

// The lottery will draw 6 balls from a pool labelled 1 to 49

// Your function should idsplay the selected balls in ascending order