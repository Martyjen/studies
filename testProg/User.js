class User {
    constructor (username, password){
  this.username = username;
  this.password = password;
    }
    validatePassvord (){
      if (this.password.length > 6)    {
        return true;
      }
      return false;
    }
  }