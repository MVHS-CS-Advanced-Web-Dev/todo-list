import './styles.css';
import { Todo } from '../../types/todos';

interface TodoItemProps {
	todo: Todo;
	toggleCheck: () => void;
}

const TodoItem = ({ todo, toggleCheck }: TodoItemProps) => {
	return (
		<div className="item">
			<input type="checkbox" checked={todo.done} onChange={toggleCheck} />
			<span
				className={`todo-text ${todo.done ? 'done' : ''}`}
				onClick={toggleCheck}
			>{todo.text}</span>
		</div>
	);
};

export default TodoItem;
