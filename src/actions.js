export const TITAN_ADD = 'TITAN_ADD'
export const TITAN_ADD_ALL = 'TITAN_ADD_ALL'
export const TITAN_DELETE = 'TITAN_DELETE'
export const TITAN_UPDATE_STATE = 'TITAN_UPDATE_STATE'

export function titanAdd(_id, name, description) {
	return { type: TITAN_ADD, _id, name, description }
}

export function titanAddAll(titan_list) {
	return { type: TITAN_ADD_ALL, titan_list }
}

export function titanDelete(_id) {
	return { type: TITAN_DELETE, _id }
}

export function titanUpdateState(_id) {
	return { type: TITAN_UPDATE_STATE, _id }
}