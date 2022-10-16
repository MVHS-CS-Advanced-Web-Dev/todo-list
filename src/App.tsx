import { useState } from 'react';
import TodoList from './components/todo-list';
import Header from './components/header';
import { Todo } from './types/todos';
import './App.css';

const App = () => {
  const [adding, setAdding] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>([{
    text: 'this is some text',
    done: true
  }]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTodo = (): void => {
    setAdding(true);
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (inputValue.length > 0) {
      const newTodo: Todo = {
        text: inputValue,
        done: false
      };
      setTodos((prev: Todo[]): Todo[] => [...prev, newTodo]);
      setInputValue('');
      setAdding(false);
    }
  };

  const handleUpdateValue = (e: any): void => {
    setInputValue(e.currentTarget.value);
  };

  const toggleCheck = (index: number): void => {
    setTodos((prev: Todo[]): Todo[] => prev.map((item: Todo, i: number): Todo => {
      let copy = { ...item };
      if (index === i) {
        copy.done = !copy.done;
      }
      return copy;
    }));
  };

  const cancelAdd = (): void => {
    setInputValue('');
    setAdding(false);
  };

  const handleRemoveDone = (): void => {
    setTodos((prev: Todo[]): Todo[] => prev.filter((item: Todo): boolean => !item.done));
  };

  return (
    <div className="app">
      <Header addTodo={handleAddTodo} removeDone={handleRemoveDone} />
      <main>
        {adding && (
          <form onSubmit={handleSubmit}>
            <input onChange={handleUpdateValue} value={inputValue} />
            <button type="submit">Add</button>
            <button onClick={cancelAdd}>Cancel</button>
          </form>
        )}
        <TodoList todos={todos} handleToggleCheck={toggleCheck} />
      </main>
    </div>
  );
};

export default App;
