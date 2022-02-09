import firebase from 'firebase/compat/app'
import {getApps} from 'firebase/app'
import 'firebase/compat/firestore'

//se não tiver um app inicializado
if(!getApps().length){
    //inicialização do firebase
    firebase.initializeApp({
        apiKey:'AIzaSyAlOY6MsTln7_BuE_3PZh3Eqnso4p4FK48',
        authDomain: 'next-crud-bfc43.firebaseapp.com',
        projectId: 'next-crud-bfc43',
    })
}

export default firebase