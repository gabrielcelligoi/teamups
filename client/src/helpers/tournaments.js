const createSingle = (players) => {
  const bracket = {}
  
  bracket['totalPlayers'] = players
  bracket['totalMatches'] = players - 1

  for (let i = 1; players > 1; i++) {
    players = players / 2;
    bracket[`round${i}`] = players
  }
  return bracket

}

module.exports = { createSingle }