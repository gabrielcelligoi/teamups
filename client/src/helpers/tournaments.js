const createSingle = (players) => {
  const bracket = {}
  
  for (let i = 1; players > 1; i++) {
    players = Math.floor(players / 2);
    bracket[`round${i}`] = players
  }
  return bracket

}

module.exports = { createSingle }