import { login, register } from "../firebaseModel.js";
import LoginView from "../views/loginView.jsx";
import "../firebaseModel.js"

const Login={
    props: ["model"],
    data(){ return {
        email:"",
        password:"",
        playlist:""}},
    render(){ 
        function loginUserACB(){ login({email: this.email, password: this.password, playlist: this.model.songs}) }
        function registerUserACB(){ register({email: this.email, password: this.password, playlist: this.model.songs}) }
        function emailChangeACB(e){ this.email = e }
        function passwordChangeACB(p){ this.password = p }
        return(
            <LoginView onLoginButton={ loginUserACB.bind(this) }
                    onRegisterButton={ registerUserACB.bind(this) }
                    onEmailInput={ emailChangeACB.bind(this) }
                    onPasswordInput={ passwordChangeACB.bind(this) }/>
        )
    }
}

export default Login;