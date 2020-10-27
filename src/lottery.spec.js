const lottery = require("./lottery")

describe("Lottery", () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it("Draw random ball is an integer", () => {
    expect(Number.isInteger(lottery.drawRandomBall())).toBe(true)
  })

  it("Check Min and Max ball", () => {
    const mathRandomSpy = jest.spyOn(Math, 'random')
    mathRandomSpy.mockImplementation(() => 0)
    expect(lottery.drawRandomBall()).toBe(lottery.MIN_NUMBER)
    mathRandomSpy.mockImplementation(() => 1)
    expect(lottery.drawRandomBall()).toBe(lottery.MAX_NUMBER)
  })


  it("Check is ascending order", () => {
    const lotteryBalls = [38, 14, 26, 5, 48, 21]
    expect(lottery.sortLotteryAscending(lotteryBalls)).toEqual([5, 14, 21, 26, 38, 48])
  })

})

// // Write a function that will return random numbers for a lottery

// // The lottery will draw 6 balls from a pool labelled 1 to 49

// // Your function should idsplay the selected balls in ascending order