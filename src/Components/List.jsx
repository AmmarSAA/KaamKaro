import React from "react";
import Item from "./Items";

const List = ({ todos, onUpdate, onDelete }) => {
	return (
		<div className="todo-list">
			{todos.map((todo) => (
				<Item
					key={todo.id}
					todo={todo}
					onUpdate={onUpdate}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
};

export default List;
