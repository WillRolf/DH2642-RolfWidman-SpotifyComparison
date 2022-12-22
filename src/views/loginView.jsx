function LoginView(props){
    function onLoginButtonPressACB(){ props.onLoginButton(); }
    function onEmailInputChangeACB(event){ props.onEmailInput(event.target.value); }
    function onPasswordInputChangeACB(event){ props.onPasswordInput(event.target.value); }
    return (<div>
        <input class="inputBox" style="border-color: rgb(25, 20, 20)" 
        placeholder="Email..."
        onChange={onEmailInputChangeACB}>
        </input>
        <input class="inputBox" style="border-color: rgb(25, 20, 20)" 
        placeholder="Password..."
        onChange={onPasswordInputChangeACB}>
        </input>
        <button class="button"
        onClick={onLoginButtonPressACB}>
            Login
        </button>
    </div>
    );
}

export default LoginView;