function SearchFormView(props){
    function spotifyTypeOptionsCB(option){
        return (
            <option>
                {option}
            </option>
        );
    }
    function onInputChangeACB(event){
        props.onInputChange(event.target.value);
    }
    function onOptionChoiceACB(choice){
        props.onOptionChoice(choice.target.value);
    }
    function onButtonPressACB(){
        props.onButtonPress();
    }
    return (
    <div>
        <input
        class="inputBox" style="border-color: rgb(25, 20, 20)"
        onChange={onInputChangeACB}
        placeholder="Search...">
        </input>
        <select
        class="button"
        onChange={onOptionChoiceACB}>
            <option value="">
                Choose:
            </option>
            {
                props.spotifyTypeOptions.map(spotifyTypeOptionsCB)
            }
        </select>
        <button
        class="button"
        style="margin:5px"
        onClick={onButtonPressACB}>
            Search!
        </button>
    </div>
    );
}

export default SearchFormView;