import React from 'react';
import Game from "./cross/Cross";


class App extends React.Component{
    render(){
        return (
            <div>
                <h3>井字棋</h3>
                <Game></Game> 
            </div>           
                
        )
    }
}
export default App;