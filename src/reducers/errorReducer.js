import { ERROR, CLEAR_ERROR } from "../types/errorTypes";

const initialState = { message: null };

const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case ERROR:
			return {
        ...state,
				message: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        message: null
      }
		default:
			return state;
	}
}

export default errorReducer;