function LoginView(props){
    function onLoginButtonPressACB(){ props.onLoginButton(); }
    function onRegisterButtonPressACB(){ props.onRegisterButton(); }
    function onEmailInputChangeACB(event){ props.onEmailInput(event.target.value); }
    function onPasswordInputChangeACB(event){ props.onPasswordInput(event.target.value); }
    return (<div class="login">
        <span class="loginTitle">Login or Register!</span><br></br>
        <input class="inputBox" style="border-color: rgb(25, 20, 20)" 
        placeholder="Email..."
        onChange={onEmailInputChangeACB}>
        </input><br></br>
        <input class="inputBox" style="border-color: rgb(25, 20, 20)" 
        placeholder="Password..."
        onChange={onPasswordInputChangeACB}>
        </input><br></br>
        <button class="button"
        onClick={onLoginButtonPressACB}>
            Login
        </button>
        <button class="button" style="float:right"
        onClick={onRegisterButtonPressACB}>
            Register
        </button>
    </div>
    );
}

export default LoginView;