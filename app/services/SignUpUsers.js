import {AsyncStorage} from 'react-native'
class SignUpUsers{

    constructor(){
        this.users = [];
    }

    async signUp(data){

        AsyncStorage.setItem('authUser', JSON.stringify(data));

        return true;
    }  

    async signIn(data){
        let authUser = await AsyncStorage.getItem('authUser')
        authUser = JSON.parse(authUser)
        
        console.log(authUser.email, data.email,authUser.password, data.password)
        if(authUser.email == data.email && authUser.password == data.password ){
            return true
        }  

        return false
        
    }
}

export default new SignUpUsers();