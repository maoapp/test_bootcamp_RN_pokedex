import { AsyncStorage } from 'react-native';

class AuthService {

    static login = async (loginData) => {
        try {
            let localStorageData = await AsyncStorage.getItem(loginData.username);

            if (localStorageData !== null) {
                localStorageData = JSON.parse(localStorageData);
                if (localStorageData.password === loginData.password) {
                    return true;
                } else {
                    return false;
                }

            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }

    static register = async (registerData) => {
        try {
            await AsyncStorage.setItem(registerData.username, JSON.stringify(registerData));

            return true;
        } catch (error) {
            return false;
        }
    };

}

export default AuthService;