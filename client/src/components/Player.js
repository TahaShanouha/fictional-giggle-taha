import '../App.css'


function Player(props) {
    return (
        <li>
            <ul>
                <li className={"player-name"}>{props.name}</li>
                <li>{props.age}</li>
                <li>{props.job}</li>
                <li>{props.salary}</li>
            </ul>
        </li>
    );
}

export default Player;