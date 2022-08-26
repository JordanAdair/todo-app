import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import { firestore, auth } from "./../constants/firebase";

type Props = {};

const CreateTodo = (props: Props) => {
	const [title, setTitle] = useState("");

	const handleChange = (e: any) => {
		setTitle(e.target.value);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setTitle("");

		if (title !== "") {
			await addDoc(collection(firestore, "todos"), {
				uid: auth.currentUser?.uid,
				title,
				completed: false,
				dateCreated: Date.now(),
			});
		}
	};

	return (
		<form
			className="bar-style | flex justify-between mt-10 mb-5 rounded-md text-lg dark:text-gray-600"
			onSubmit={handleSubmit}
		>
			<input
				className="w-full mr-3 dark:bg-darkBlue500 bg-white focus:outline-none focus-visible:outline dark:text-lightBlue200 text-gray-800 placeholder-gray-500"
				type="text"
				placeholder="Create a new todo..."
				value={title}
				name="text"
				onChange={handleChange}
				autoComplete="off"
			/>
			<button className="bar-hover-style text-gray-500 hover:text-gray-800">
				Add
			</button>
		</form>
	);
};

export default CreateTodo;
