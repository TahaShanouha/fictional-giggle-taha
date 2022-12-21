import queryForPlayers from "./PlayersDb";

const readPlayers = async (source, fileName) => {
  switch (source) {
    case 'json':
      return JSON.parse(readPlayersFromJsonString());

    case 'database':
      return readPlayersFromDatabase();

    case 'api':
      const playersResponse = await fetch('api/getPlayersFromFile/playerdata.json', {
        headers: {
          'accept': 'application/json'
        }
      });
      const players = JSON.parse(await playersResponse.json());

      return players;
  }
}

const readPlayersFromJsonString = () => {
  return '[{"name":"Jonas Valenciunas","age":26,"job":"Center","salary":"4.66m"},{"name":"Kyle Lowry","age":32,"job":"Point Guard","salary":"28.7m"},{"name":"Demar DeRozan","age":28,"job":"Shooting Guard","salary":"26.54m"},{"name":"Jakob Poeltl","age":22,"job":"Center","salary":"2.704m"}]';
}

const readPlayersFromDatabase = () => {
  return queryForPlayers();
}




export {
  readPlayers,
  readPlayersFromJsonString,
  readPlayersFromDatabase,
}


