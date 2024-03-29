import { useState } from 'react';

const Player = ({ initialName, symbol, isActive }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	const hangleEditClick = () => {
		setIsEditing((editing) => !editing);
	};

	const handleChangeName = (e) => {
		setPlayerName(e.target.value);
	};

	return (
		<li className={isActive ? 'active' : null}>
			<span className='player'>
				{isEditing ? <input required value={playerName} onChange={handleChangeName} /> : <span className='player-name'>{playerName}</span>}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={hangleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
};

export default Player;