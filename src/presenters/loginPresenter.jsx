import { login, register } from "../firebaseModel.js";
import LoginView from "../views/loginView.jsx";
import RegisterView from "../views/registerView.jsx"
import "../firebaseModel.js"

const Login={
    data(){ return {
        email:"",
        password:""}},
    render(){ 
        function loginUserACB(){ login({email: this.email, password: this.password}) }
        function registerUserACB(){ register({email: this.email, password: this.password}) }
        function emailChangeACB(e){ this.email = e }
        function passwordChangeACB(p){ this.password = p }
        return(<div>
            <LoginView onLoginButton={ loginUserACB.bind(this) }
                    onEmailInput={ emailChangeACB.bind(this) }
                    onPasswordInput={ passwordChangeACB.bind(this) }/>
            <RegisterView onRegisterButton={ registerUserACB.bind(this) }
                    onEmailInput={ emailChangeACB.bind(this) }
                    onPasswordInput={ passwordChangeACB.bind(this) }/></div>
        )
    }
}

export default Login;