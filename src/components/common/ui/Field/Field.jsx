import { BsPlusLg } from 'react-icons/bs'

import styles from './Field.module.sass'

const Field = ({
	placeholder = 'Add a task',
	value = '',
	onChange = () => {},
	onClick = () => {},
	onKeyPress = () => {},
}) => {
	return (
		<>
			<div className={styles.container}>
				<button className={styles.button} onClick={onClick}>
					<BsPlusLg />
				</button>
				<input
					type='text'
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					onKeyPress={onKeyPress}
				/>
			</div>
		</>
	)
}

export default Field
