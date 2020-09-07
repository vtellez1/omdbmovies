import NominationsActionTypes from './nominations.types'
import { addNominationToList, removeNominationFromList} from './nominations.utils'

const INITIAL_STATE = {
    nominations: {}
}

const nominationsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NominationsActionTypes.ADD_NOMINATION:
            return {
                ...state,
                nominations: addNominationToList(state.nominations, action.payload)
            };
        case NominationsActionTypes.REMOVE_NOMINATION:
            return {
                ...state,
                nominations: removeNominationFromList(state.nominations, action.payload)
            }
        default:
            return state;
    }
};

export default nominationsReducer