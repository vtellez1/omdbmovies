export const addNominationToList = (nominationList, movieToAdd) => {
if(!(movieToAdd.imdbID in nominationList)){
    nominationList[movieToAdd.imdbID] = movieToAdd
}
return nominationList
};


export const removeNominationFromList = (nominationList, movieToRemove) => {
    let removeID = movieToRemove.imdbID;

    const newNominationList = Object.keys(nominationList).reduce((object, key) => {
        if(key !== removeID){
            object[key] = nominationList[key]
        }
        return object
    }, {})

return newNominationList
}
