export const addNominationToList = (nominationList, movieToAdd) => {
    //return [...nominationList, movieToAdd]
if(!(movieToAdd.imdbID in nominationList)){
    nominationList[movieToAdd.imdbID] = movieToAdd
}

return nominationList

};

//idea to convert to object to add:
// if(!(movieToAdd.imdbID in nominationList)){
//     nominationList[movieToAdd.imdbID] = movieToAdd
// }

// return nominationList

export const removeNominationFromList = (nominationList, movieToRemove) => {
    //return nominationList.filter(nominee => nominee.imdbID !== movieToRemove.imdbID)
    let removeID = movieToRemove.imdbID;

    const newNominationList = Object.keys(nominationList).reduce((object, key) => {
        if(key !== removeID){
            object[key] = nominationList[key]
        }
        return object
    }, {})

return newNominationList
}

//idea to convert to object to remove:
// const removeID = movieToRemove.imdbID;

// const newNominationList = Object.keys(nominationList).reduce((nominationList, key) => {
//     if(key !== removeID){
//         nominationList[key] = nominationList[key]
//     }
//     return nominationList
// }, {})

// return newNominationList