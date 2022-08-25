import SortingTray from "./SortingTray";
import TodoList from "./TodoList";

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
		<div className="relative flex flex-col">
			<div className="flex flex-col rounded-md drop-shadow-lg">
				<TodoList
					todos={todos}
					toggleComplete={toggleComplete}
					handleDelete={handleDelete}
				/>
				<SortingTray itemsLeft={itemsLeft} clearCompleted={clearCompleted} />
			</div>
		</div>
	);
};
export default TodoContainer;
