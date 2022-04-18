



const jsonToObject = (stringJSON) =>{
    let userObject = {};
    try {
        
        userObject = JSON.parse(stringJSON);

        
    } catch (error) {
        
        throw Error("you submit something was wrong from jsonToObject")
    }

    return userObject;
}

module.exports = jsonToObject;