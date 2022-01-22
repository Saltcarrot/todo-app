export const todoReducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'add':
			return [
				{
					_id: Math.random().toString(36).substr(2, 9),
					title: payload,
					completed: false,
				},
				...state,
			]
		case 'delete':
			return state.filter((item) => item._id !== payload)
		case 'check':
			return state.map((item) => {
				if (item._id === payload) {
					return { ...item, completed: !item.completed }
				}
				return item
			})
		default:
			return state
	}
}
