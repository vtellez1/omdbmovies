import NominationsActionTypes from './nominations.types';

export const addNomination = movie =>  ({
    type: NominationsActionTypes.ADD_NOMINATION,
    payload: movie
});

export const removeNomination = movie => ({
    type: NominationsActionTypes.REMOVE_NOMINATION,
    payload: movie
})