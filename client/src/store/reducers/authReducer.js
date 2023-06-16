const initialState = {
	userDetails: {},
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'dsa':
			return {
				...state,
			}
		default:
			return state
	}
}

export default reducer
