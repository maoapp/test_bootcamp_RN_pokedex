// Firebase
import * as firebase from 'firebase/app';

class firebaseAuth {
  constructor() {
    this.auth = firebase.auth();
  }

  createUser = async (email, password) => {
    try {
      const createdUser = await this.auth.createUserWithEmailAndPassword(email, password);
      return createdUser.user;
    } catch (error) {
      return error;
    }
  }

  loginUser = async (email, password) => {
    try {
      const signedUser = await this.auth.signInWithEmailAndPassword(email, password);
      return signedUser.user;
    } catch (error) {
      return error;
    }
  }

  signOutUser = () => {
    this.auth.signOut()
     .then(() => console.log('user loged out'))
     .catch(error => console.log(error));
  }

}

export default firebaseAuth;