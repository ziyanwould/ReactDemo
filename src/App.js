import React,{ Component} from 'react'
import './style.css'
class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            show:true
        }
        this.handleToggle= this.handleToggle.bind(this)
    }
    render(){

        return(
            <React.Fragment>
                <div className={this.state.show?'show':'hide'}>hellow</div>
                <button onClick={this.handleToggle}>toggle</button>
            </React.Fragment>
        ) 
    }
    handleToggle(){
      this.setState({
         show:this.state.show ? false : true
      })  
    }
}

export default App;