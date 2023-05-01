import { SET_INITIAL_ADDRESS, SET_DESTINATION_ADDRESS, SearchFormActionTypes } from './actions';

interface SearchFormState {
  initialAddress: string;
  destinationAddress: string;
}

const initialState: SearchFormState = {
  initialAddress: '',
  destinationAddress: '',
};

export const searchFormReducer = (
  state = initialState,
  action: SearchFormActionTypes
): SearchFormState => {
  switch (action.type) {
    case SET_INITIAL_ADDRESS:
      return {
        ...state,
        initialAddress: action.payload,
      };
    case SET_DESTINATION_ADDRESS:
      return {
        ...state,
        destinationAddress: action.payload,
      };
    default:
      return state;
  }
};
