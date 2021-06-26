let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
  if (
      userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
  }

  console.log(isEveryoneHere(users));

  function countOnline(usersObj) {
  
    let result = 0;
      for (let users in usersObj) {
        if (usersObj[users].online === true) {
          result++;
        }
      }
      return result;
    }
    console.log(countOnline(users))


    //Generate an Array of All Object Keys with Object.keys()
    function getArrayOfUsers(obj) {
      return Object.keys(users)
    }
    
    console.log(getArrayOfUsers(users));