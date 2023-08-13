import React, { useState } from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import { FaPencilAlt, FaSave, FaTrash } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"

const Item = ({ todo, onUpdate, onDelete }) => {
	const [updatedText, setUpdatedText] = useState("");
	const [isEditMode, setIsEditMode] = useState(false);

	const handleUpdateClick = () => {
		setIsEditMode(true);
		setUpdatedText(todo.text);
	};

	const handleUpdateConfirm = () => {
		if (updatedText.trim() !== "") {
			setIsEditMode(false);
			onUpdate({ ...todo, text: updatedText });
			swal("Updated!", "Task updated successfully", "success");
		} else {
			swal("Oops!", "Please enter a task", "error");
		}
	};

	const handleCancelClick = () => {
		setIsEditMode(false);
	};

	const handleDeleteClick = () => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, this task will be gone forever!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				onDelete(todo.id);
			}
		});
	};

	return (
		<div className="todo-item">
			{isEditMode ? (
				<>
					<input className="form-content" type="text" placeholder="Todo List" readOnly={false}
						value={updatedText}
						onChange={(e) => setUpdatedText(e.target.value)}
					/>
					<Button variant="success" onClick={handleUpdateConfirm} className="text-white px-2 pb-2 ms-2 mb-1">
						<FaSave />
					</Button>
					<Button variant="secondary" onClick={handleCancelClick} className="text-white px-2 pb-2 ms-2 mb-1">
						<AiOutlineClose />
					</Button>
				</>
			) : (
				<>
					<input className="form-content" type="text" placeholder="Todo List" disabled={true} readOnly={true}
						value={todo.text}
					/>
					<Button variant="info" onClick={handleUpdateClick} className="text-white px-2 pb-2 ms-2 mb-1">
						<FaPencilAlt />
					</Button>
					<Button variant="danger" onClick={handleDeleteClick} className="text-white px-2 pb-2 ms-2 mb-1">
						<FaTrash />
					</Button>
				</>
			)}
		</div>
	);
};

export default Item;
