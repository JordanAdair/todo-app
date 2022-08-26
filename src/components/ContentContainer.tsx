import {
	collection,
	query,
	orderBy,
	where,
	limit,
	onSnapshot,
	doc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";

import { firestore, auth } from "../constants/firebase";
import { Header, TodoContainer, CreateTodo } from "../components/index";

type Props = {};

const ContentContainer = (props: Props) => {
	const [todos, setTodos] = useState([]);
	// const [sort, setSort] = useState("");

	// const handleSort = () => {
	// 	switch (sort) {
	// 		case "sort-active":
	// 			getActive();
	// 			break;

	// 		case "sort-completed":
	// 			getCompleted();
	// 			break;

	// 		default:
	// 			getAll();
	// 			break;
	// 	}
	// };

	// Grab initial todos
	useEffect(() => {
		const q = query(
			collection(firestore, "todos"),
			where("uid", "==", auth.currentUser?.uid),
			orderBy("dateCreated", "desc"),
			limit(50)
		);
		const unsub = onSnapshot(q, (querySnapshot) => {
			let todosArray: any = [];
			querySnapshot.forEach((doc) => {
				todosArray.push({ ...doc.data(), id: doc.id });
			});
			setTodos(todosArray);
		});
		return () => unsub();
	}, []);

	const getAll = () => {
		// setSort("sort-all");

		const q = query(
			collection(firestore, "todos"),
			where("uid", "==", auth.currentUser?.uid),
			orderBy("dateCreated", "desc"),
			limit(50)
		);
		const unsub = onSnapshot(q, (querySnapshot) => {
			let todosArray: any = [];
			querySnapshot.forEach((doc) => {
				todosArray.push({ ...doc.data(), id: doc.id });
			});
			setTodos(todosArray);
		});
		return () => unsub();
	};

	const getActive = () => {
		// setSort("sort-active");

		const q = query(
			collection(firestore, "todos"),
			where("uid", "==", auth.currentUser?.uid),
			where("completed", "==", false),
			orderBy("dateCreated", "desc"),
			limit(50)
		);
		const unsub = onSnapshot(q, (querySnapshot) => {
			let todosArray: any = [];
			querySnapshot.forEach((doc) => {
				todosArray.push({ ...doc.data(), id: doc.id });
			});
			setTodos(todosArray);
		});
		return () => unsub();
	};

	const getCompleted = () => {
		// setSort("sort-all");

		const q = query(
			collection(firestore, "todos"),
			where("uid", "==", auth.currentUser?.uid),
			where("completed", "==", true),
			orderBy("dateCreated", "desc"),
			limit(50)
		);
		const unsub = onSnapshot(q, (querySnapshot) => {
			let todosArray: any = [];
			querySnapshot.forEach((doc) => {
				todosArray.push({ ...doc.data(), id: doc.id });
			});
			setTodos(todosArray);
		});
		return () => unsub();
	};

	const toggleComplete = async (todo: any) => {
		await updateDoc(doc(firestore, "todos", todo.id), {
			completed: !todo.completed,
		});
	};

	const handleDelete = async (id: any) => {
		await deleteDoc(doc(firestore, "todos", id));
	};

	const clearCompleted = async () => {
		const q = query(
			collection(firestore, "todos"),
			where("uid", "==", auth.currentUser?.uid),
			where("completed", "==", true)
		);
		const unsub = onSnapshot(q, (querySnapshot) => {
			querySnapshot.forEach((d) => {
				const docRef = doc(firestore, "todos", d.id);
				deleteDoc(docRef);
			});
			unsub();
		});
		return () => unsub();
	};

	return (
		<div className="flex flex-col mt-14 lg:mt-20 2xl:mt-24 w-[85vw] lg:w-[60vw] 2xl:w-[37vw] min-w-[22em] self-center tracking-wider">
			<Header />
			<CreateTodo />
			<TodoContainer
				todos={todos}
				handleDelete={handleDelete}
				toggleComplete={toggleComplete}
				itemsLeft={todos.length}
				clearCompleted={clearCompleted}
			/>
		</div>
	);
};

export default ContentContainer;
