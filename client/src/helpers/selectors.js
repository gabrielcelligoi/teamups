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


  export function getSportId(name, state) {
    for (let item of state) {
      if (item.name === name) {
        return item.id
      }
    }
  }
  
  
  // const db = [
  //   {
  //     match_id: 2,
  //     tournament_id: null,
  //     players: "Francis",
  //     sport: "Basketball",
  //     sport_id: 1,
  //     date: "2022-05-01T04:00:00.000Z",
  //     location: "Toronto"
  //   },
  //   {
  //     match_id: 2,
  //     tournament_id: null,
  //     players: "Billy",
  //     sport: "Basketball",
  //     sport_id: 1,
  //     date: "2022-05-01T04:00:00.000Z",
  //     location: "Toronto"
  //   }
  // ]

