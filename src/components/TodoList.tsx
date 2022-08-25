import { Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";

type Props = {
	todos: any;
	toggleComplete: any;
	handleDelete: any;
};

const TodoList = ({ todos, toggleComplete, handleDelete }: Props) => {
	return (
		<div>
			{todos.map((todo: any, index: any) => (
				<Todo
					key={todo.id}
					index={index}
					todo={todo}
					toggleComplete={toggleComplete}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
};

export default TodoList;
