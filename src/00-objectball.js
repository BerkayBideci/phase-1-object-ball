function gameObject() {
    return {
        "home":
        {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 2,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                },
            }
        }, "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
}

console.log(gameObject())

function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (player === playerName) {
                return players[player].points
            }
        }
    }
}

console.log(numPointsScored("Brendan Haywood"))

function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (player === playerName) {
                return players[player].shoe
            }
        }
    }
}

console.log(shoeSize("Jason Terry"))
console.log(shoeSize("Mason Plumlee"))

function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors
        }
    }
}

console.log(teamColors("Charlotte Hornets"))
console.log(teamColors("Brooklyn Nets"))

function teamNames() {
    const game = gameObject();
    const teamNames = [];
    for (let team in game) {
        teamNames.push(game[team].teamName)
    }
    return teamNames
}

console.log(teamNames(gameObject()))

function playerNumbers(teamName) {
    const game = gameObject();
    const playerNumbers = [];
    for (let team in game) {
        if (game[team].teamName === teamName) {
            const players = game[team].players
            for (let player in players) {
                playerNumbers.push(players[player].number)
            }
        }
    }
    return playerNumbers
}

console.log(playerNumbers("Charlotte Hornets"))

function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (player === playerName) {
                return players[player]
            }
        }
    }
}

console.log(playerStats("Mason Plumlee"))

function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoe = 0;
    let rebounds = 0;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (players[player].shoe > biggestShoe) {
                biggestShoe = players[player].shoe
                rebounds = players[player].rebounds
            }
        }
    }
    return rebounds
}

console.log(bigShoeRebounds(gameObject()))

function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let playerName;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (players[player].points > mostPoints) {
                mostPoints = players[player].points;
                playerName = player
            }
        }
    }
    return playerName;
}

console.log(mostPointsScored(gameObject()));

function winningTeam() {
    const game = gameObject();
    let teamPoints = {
        home: 0,
        away: 0
    };
    for (let team in game) {
        const players = game[team].players;
        let totalPoints = 0;
        for (let player in players) {
            totalPoints += players[player].points;
        }
        teamPoints[team] = totalPoints;
    }
    return teamPoints.home > teamPoints.away ? game.home.teamName : game.away.teamName;
}

console.log(winningTeam(gameObject()))

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    let playerName = "";
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player;
                playerName = player;
            }
        }
    }
    return playerName;
}

console.log(playerWithLongestName(gameObject()));

function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = "";
    let mostSteals = 0;
    let playerWithMostSteals;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (players[player].steals > mostSteals) {
                mostSteals = players[player].steals;
                playerWithMostSteals = player;
            }
        }
    }
    return playerWithMostSteals === longestName;
}

console.log(doesLongNameStealATon(gameObject()));
