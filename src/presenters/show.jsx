const Show = {
    props:["hash"],
    data(){ return {hashState: window.location.hash}; }, 
    methods:{
        hashListenerACB(e){ this.hashState = window.location.hash; }
    },
    created(){ 
        window.addEventListener("hashchange", this.hashListenerACB);
    },
    unmounted(){
        window.removeEventListener("hashchange", this.hashListenerACB);
    },
    render(){
        console.log("hashstate:"+this.hashState);
        console.log("hash:"+this.hash);
        //if (window.location.hash !== "#summary" || "#details"){ window.location.hash = "#search" }
        return <span 
        class={this.hashState === this.hash? "mainContent": "hidden"}>
            {this.$slots.default()}</span>;
    },
}

export default Show;