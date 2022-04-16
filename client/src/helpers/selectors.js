const matches = [
    {
      match_id: 1,
      players: "Francis",
      sport: "Basketball",
      date: "2022-04-01T04:00:00.000Z",
      location: "Baltimore"
    },

    {
      match_id: 1,
      players: "Billy",
      sport: "Basketball",
      date: "2022-04-01T04:00:00.000Z",
      location: "Baltimore"
    },

    {
      match_id: 2,
      players: "Tom",
      sport: "Basketball",
      date: "2022-05-01T04:00:00.000Z",
      location: "Toronto"
    },

    {
      match_id: 2,
      players: "Jake",
      sport: "Basketball",
      date: "2022-05-01T04:00:00.000Z",
      location: "Toronto"
    }
  ]

 export function getPlayersPerMatch(match, id) {
    
    const currentMatch = match.filter(current => current.match_id === id);
    currentMatch[0].players = [currentMatch[0].players]
    for (let i = 0; i < currentMatch.length - 1; i++) {
      
      currentMatch[0].players.push(currentMatch[1].players)
    }

    const matchObject = currentMatch[0]
    return matchObject
  }
  // console.log(getPlayersPerMatch(matches, 1))

  export function getAllMatches(db) {

    const matchArr = []
    for (let item of db) {
     let currentItem = getPlayersPerMatch(db, item.match_id)
     currentItem.players = currentItem.players.flat()
     matchArr.push(currentItem)
    }
    const uniqueArr = [...new Set(matchArr)]
    for (let item of uniqueArr) {
      item.players = [...new Set(item.players)]
    }
    return uniqueArr
  }

  // getAllMatches(matches)
