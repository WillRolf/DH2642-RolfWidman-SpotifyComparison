import { firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase } from "../firebaseModel";
import resolvePromise from "../resolvePromise";
import App from "../presenters/app.jsx";
import promiseNoData from "../views/promiseNoData";
import firebase from "firebase/app";
import "firebase/auth"

// Define the VueRoot component
const VueRoot = { 
    data() { return {promiseState: {}}; 
    }, 
    created() {
        function connectToFirebaseACB() { 
            if (!this.promiseState.data) return;

            updateFirebaseFromModel(this.promiseState.data);
            if (firebase.auth().currentUser){
                updateModelFromFirebase(this.promiseState.data);
            }
        }
            resolvePromise(firebaseModelPromise(), this.promiseState, connectToFirebaseACB.bind(this));
    },
    render() {
        return promiseNoData(this.promiseState) || <App model={this.promiseState.data} />;
    },
};
// Export the VueRoot component
export default VueRoot;