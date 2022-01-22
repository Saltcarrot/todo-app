import { useReducer, useState } from 'react'

import { initialTodos } from '../../store/initialTodos.js'
import { todoReducer } from '../../store/reducers/todoReducer.js'

import Layout from '../common/Layout'
import Field from '../common/ui/Field/Field'
import TodoItem from '../common/TodoItem/TodoItem'

import styles from './App.module.sass'

const App = () => {
	const [title, setTitle] = useState('')
	const [state, dispatch] = useReducer(todoReducer, initialTodos)

	const addTodoByClick = () => {
		if (title !== '') {
			dispatch({
				type: 'add',
				payload: title,
			})
			setTitle('')
		}
	}

	const addTodoByKeyPress = (event) => {
		if (title !== '') {
			if (event.key === 'Enter' || event.keyCode === 13) {
				dispatch({
					type: 'add',
					payload: title,
				})
				setTitle('')
			}
		}
	}

	const checkTodo = (id) => {
		dispatch({
			type: 'check',
			payload: id,
		})
	}

	const deleteTodo = (id) => {
		dispatch({
			type: 'delete',
			payload: id,
		})
	}

	return (
		<Layout>
			<Field
				value={title}
				onChange={({ target: { value } }) => setTitle(value)}
				onClick={() => addTodoByClick()}
				onKeyPress={(event) => addTodoByKeyPress(event)}
			/>
			<ul className={styles.todo_list}>
				{state.length > 0 &&
					state.map((todo) => (
						<TodoItem
							key={todo._id}
							todo={todo}
							onCheck={() => checkTodo(todo._id)}
							onDelete={() => deleteTodo(todo._id)}
						/>
					))}
			</ul>
		</Layout>
	)
}

export default App
