class Auth{

    constructor(){
        this.authenticate = false;
    }

    login(callback){
        this.authenticate = true;
        callback();
    }

    logout(callback){
        this.authenticate = false;
        callback();
    }

    isAuthenticate(){
        return this.authenticate;
    }
    
}

export default new Auth();