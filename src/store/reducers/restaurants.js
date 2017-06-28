import { GET_RESTAURANTS } from '../constants';
const restaurants = (state={}, action) => {
	switch (action.type) {
		case GET_RESTAURANTS:
			return action.content;
			break;
		default:
			return state;
	}

};

export default restaurants;
