import styles from './GameOver.module.css';

export const GameOver = ({ winner, onRestart }) => {
	return (
		<div id={styles.gameOver}>
			<h2>Game Over!</h2>
			{winner ? <p>{winner} won!</p> : <p>{winner} It's a draw!</p>}
			<p>
				<button onClick={onRestart}>Rematch!</button>
			</p>
		</div>
	);
};
