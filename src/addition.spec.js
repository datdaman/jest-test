const addition = require("./addition")

describe("addition", () => {
  it("adds two numbers", () => {
      const result = addition(1, 1)

      expect(result).toBe(2)
  })
})