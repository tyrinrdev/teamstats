const team = {
  _players: [
    {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      age: 11
},
{
      firstName: 'Mohamed',
      lastName: 'Salah',
      age: 11
},
{
      firstName: 'Alvaro',
      lastName: 'Morata',
      age: 11
}
],
  _games: [
    {
      opponent: 'Inter',
      teamPoints: 28,
      opponentPoints: 28
},
{
      opponent: 'Milan',
      teamPoints: 28,
      opponentPoints: 24
},
{
      opponent: 'Atlanta',
      teamPoints: 28,
      opponentPoints: 20
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this._players.push(player);
  },
  addGame(opponentName, teamsPoints, opponentsPoints) {
    let games = {
      opponent: opponentName,
      teamPoints: teamsPoints,
      opponentPoints: opponentsPoints   
    };

    this._games.push(games);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players)

team.addGame('Lazio', 24, 28);
team.addGame('Fiorentina', 18, 15);
team.addGame('Verona', 11, 8);

console.log(team._games)
