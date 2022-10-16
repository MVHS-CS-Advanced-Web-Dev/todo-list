import './styles.css';

interface HeaderProps {
	addTodo: () => void;
	removeDone: () => void;
}

const Header = ({ addTodo, removeDone }: HeaderProps) => {
	return (
		<header>
			<span>Todo List</span>
			<div className="controls">
				<button onClick={addTodo}>Add</button>
				<button onClick={removeDone}>Remove Done</button>
			</div>
		</header>
	);
};

export default Header;
