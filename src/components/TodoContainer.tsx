import SortingTray from "./SortingTray";
import Todo from "./Todo";

type Props = {
	todos: any;
	toggleComplete: any;
	handleDelete: any;

	// Sorting tray props
	itemsLeft: any;
	clearCompleted: any;
};

const TodoContainer = ({
	todos,
	toggleComplete,
	handleDelete,
	itemsLeft,
	clearCompleted,
}: Props) => {
	return (
		<div className="overflow-hidden rounded-md drop-shadow-lg">
			{todos.map((todo: any, index: any) => (
				<Todo
					key={todo.id}
					index={index}
					todo={todo}
					toggleComplete={toggleComplete}
					handleDelete={handleDelete}
				/>
			))}
			<SortingTray itemsLeft={itemsLeft} clearCompleted={clearCompleted} />
		</div>
	);
};
export default TodoContainer;
