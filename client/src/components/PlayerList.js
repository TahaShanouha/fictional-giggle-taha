import '../App.css'
import Player from './Player';

function PlayerList(props) {
    return (
        <div className={'players-list'}>
            <ul>
                {props.players.map((player, i) => {
                    return (
                        <Player
                            key={i}
                            name={player.name}
                            age={player.age}
                            job={player.job}
                            salary={player.salary}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default PlayerList;