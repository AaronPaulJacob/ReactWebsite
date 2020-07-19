import React from "react"

class App extends React.Component{
    
    constructor()
    {
        super()
        this.state={
            isLoggedIn: false
        }
    }


    render()
    {
        if(this.state.isLoggedIn)
           return( <div>
                        <h3> Hell You are Logged {this.state.isLoggedIn?"IN":"OUT"} </h3>
                   </div>)
        else return(
            <div>
                <h3> Hell You are Logged {this.state.isLoggedIn?"IN":"OUT"} </h3>
            </div>
        )
    }
}
export default App;