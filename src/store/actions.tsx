export const SET_INITIAL_ADDRESS = 'SET_INITIAL_ADDRESS';
export const SET_DESTINATION_ADDRESS = 'SET_DESTINATION_ADDRESS';

export interface SetInitialAddressAction {
  type: typeof SET_INITIAL_ADDRESS;
  payload: string;
}

export interface SetDestinationAddressAction {
  type: typeof SET_DESTINATION_ADDRESS;
  payload: string;
}

export const setInitialAddress = (address: string): SetInitialAddressAction => ({
  type: SET_INITIAL_ADDRESS,
  payload: address,
});

export const setDestinationAddress = (address: string): SetDestinationAddressAction => ({
  type: SET_DESTINATION_ADDRESS,
  payload: address,
});

export type SearchFormActionTypes = SetInitialAddressAction | SetDestinationAddressAction;
