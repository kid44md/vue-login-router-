const userArray = [{username:"bob", password:123}];

export function loggingInUser(username, password) {
for(let i = 0; i < userArray.length; i++){
    if(userArray[i].username == username && userArray[i].password == password){
        return true; 
    }
    return false; 
}
};

export function creatingNewUser(username, password) {
    userArray.push({username:username, password:password})
};

export function checkingDatabase(Username, Email) {
    if(userArray.length == 0){
        return false; 
    }
    for (const user of userArray) {
     if(user.username == Username){
        return true;
        } else {
        return false;
        }
    }
    return true;
}