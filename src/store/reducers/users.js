export const users = (state = [], action) => {
	switch (action.type) {
		case 'SAVE_USERS':
			//the first users list always will be the new array
			return action.payload;
		case 'ADD_USERS':
			//from the second on we have to cancatenate it with the previous one
			return state.concat(action.payload);
		default:
			return state;
	}
};
