import './styles.css';
import { Todo } from '../../types/todos';
import TodoItem from '../todo-item';

interface TodoListProps {
	todos: Todo[];
	handleToggleCheck: (index: number) => void;
}

const TodoList = ({ todos, handleToggleCheck }: TodoListProps) => {
	return (
		<>
			{todos.map((todo: Todo, index: number) => (
				<TodoItem todo={todo} key={index} toggleCheck={() => handleToggleCheck(index)} />
			))}
		</>
	);
};

export default TodoList;
