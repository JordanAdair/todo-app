import React from "react";

type Props = {
	itemsLeft: any;
	clearCompleted: any;
};

const SortingTray = ({ itemsLeft, clearCompleted }: Props) => {
	return (
		<div className="bar-style | flex text-sm justify-between py-4 dark:text-gray-600 text-gray-400 select-none rounded-b-lg">
			<p className="select-none flex">
				{itemsLeft}
				{itemsLeft == 1 ? " item" : " items"}
			</p>
			<button
				className="bar-hover-style | whitespace-nowrap"
				onClick={clearCompleted}
			>
				Clear Completed
			</button>
		</div>
	);
};

export default SortingTray;
