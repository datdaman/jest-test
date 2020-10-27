const MIN_NUMBER = 1;
const MAX_NUMBER = 49;

const drawRandomBall = () => {
  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER)
}

const drawLottery = () => {
  let lotteryNumbers = []
  while(lotteryNumbers.length < 6) {
    let currentNumber = drawRandomBall()
    lotteryNumbers.push(currentNumber)
  }
  return lotteryNumbers
}

const sortLotteryAscending = arr => arr.sort((a,b) => a-b)

module.exports = {
  MIN_NUMBER,
  MAX_NUMBER,
  drawRandomBall,
  drawLottery,
  sortLotteryAscending,
}