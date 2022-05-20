import { auth, firestore } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
const users = firestore.collection("users");

export const register = async (email, pass) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, pass);
    console.log(user.user.uid);
    users.add({ userId: user.user.uid, email: user.user.email, role: "admin" });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (email, pass, setError) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    setError("User email or password is invalid");
    return false;
  }
};

export const verifAdmin = async (user) => {
  try {
    const admins = await users.where("userId", "==", user.uid).get();
    if (admins.empty) {
      console.log("there is no admin");
      return false;
    }
    let isAdmin = false;
    admins.forEach((adm) => {
      if (adm.data().role === "admin") {
        //console.log(adm.data().role,"aaaaaaaaaaaaaa");
        isAdmin = true;
      }
    });
    return isAdmin;
  } catch (error) {
    console.log(error);
  }
};

/*export const login= async (email,pass,setError)=>{
    try{
        const user = await signInWithEmailAndPassword(auth,email,pass);
        const admins = await users.where("userId", "==", user.user.uid).get();
        let isAdmin=false;
        if (admins.empty) {
            console.log('there is no admin');
            return false;
          }  
          admins.forEach(adm => {
              if(adm.data().role==="admin"){
                console.log(adm.data().role,"aaaaaaaaaaaaaa");
                isAdmin = true;
            }
          });
          return isAdmin
    }
    catch(error){
        //if(error==="Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."){
            setError("User email or password is invalid")
            return false;
        //}
    }
}*/

export const logout = async () => {
  await signOut(auth);
};
