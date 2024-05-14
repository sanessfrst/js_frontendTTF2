import { combineReducers } from 'redux';

import {TITAN_ADD, TITAN_ADD_ALL, TITAN_DELETE, TITAN_UPDATE_STATE } from './actions';


function TitanDo(state = [], action){
	switch (action.type) {
		case TITAN_ADD:
			return [
			...state, 
				{
					_id: action._id, 
					name: action.name, 
					description: action.description, 
					Status: true
				}
			]
		case TITAN_ADD_ALL:
			return [
			...action.titan_list
			]
		case TITAN_DELETE:
			return state.filter(function(ttn){
				return ttn._id !== action._id;
			})
		case TITAN_UPDATE_STATE:
			return state.map(function(ttn) {
				if (ttn._id === action._id) {
					return {...ttn, Status: !ttn.Status}
				}
				return ttn
			})
		default:
			return state
	}
}

export default combineReducers ({
	titans: TitanDo
});