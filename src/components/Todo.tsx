import { Draggable } from "react-beautiful-dnd";
import { useDraggableInPortal } from "./../hooks/useDraggableInPortal";
import { doc, updateDoc } from "firebase/firestore";

import { firestore } from "./../constants/firebase";

type Props = {
	index: any;
	todo: any;
	toggleComplete: any;
	handleDelete: any;
};

export const Todo = ({ index, todo, toggleComplete, handleDelete }: Props) => {
	const handleChange = (e: any) => {
		toggleComplete(todo);
	};

	return (
		<div className="bar-style bar-text-style | flex justify-between border-b border-gray-200 dark:border-gray-700 group">
			<div className="flex items-center relative">
				<input
					className="checkBox | mr-3 peer appearance-none h-6 w-6 border
								dark:border-gray-600 border-gray-300 hover:dark:border-gray-400 hover:border-gray-600 rounded-full checked:border-none focus:outline-none transition duration-200 align-top bg-no-repeat
								bg-center bg-contain float-left cursor-pointer"
					type="checkbox"
					id={`${todo.id}`}
					onChange={handleChange}
					checked={todo.completed ? true : false}
				/>
				<label
					className="absolute left-10 top-0 dark:text-lightBlue200 peer-checked:line-through peer-checked:text-gray-400 dark:peer-checked:text-gray-500 select-none"
					htmlFor={`${todo.id}`}
				>
					{todo.title}
				</label>
			</div>

			<button
				className="xl:invisible lg:group-hover:visible"
				onClick={() => handleDelete(todo.id)}
			>
				<img src="assets/icon-cross.svg" alt="Delete to-do." />
			</button>
		</div>
	);
};

export default Todo;
