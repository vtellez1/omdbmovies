export const addNominationToList = (nominationList, movieToAdd) => {
    return [...nominationList, movieToAdd]
};

export const removeNominationFromList = (nominationList, movieToRemove) => {
    return nominationList.filter(nominee => nominee.imdbID !== movieToRemove.imdbID)
}