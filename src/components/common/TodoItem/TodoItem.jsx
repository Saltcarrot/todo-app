import { FaCheck, FaTrash } from 'react-icons/fa'

import styles from './TodoItem.module.sass'

const TodoItem = ({ todo = {}, onCheck = () => {}, onDelete = () => {} }) => {
	return (
		<li
			className={`${styles.todo_item} ${
				todo.completed ? styles.completed : ''
			}`}
		>
			<button className={styles.check_btn} onClick={onCheck}>
				{todo.completed && <FaCheck />}
			</button>
			{todo.title}
			<button className={styles.delete_btn} onClick={onDelete}>
				<FaTrash />
			</button>
		</li>
	)
}

export default TodoItem
