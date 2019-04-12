import React,{ Component} from 'react'
import { CSSTransition } from 'react-transition-group';
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
                <CSSTransition
                 in={this.state.show}
                 timeout={1000}
                 classNames='fade'
                 unmountOnExit
                 onEntered={(el) => {el.style.color='blue'}}//钩子函数 在某个时刻自动执行的函数 比如onEntered是当入场动画执行后
                 appear={true}//第一次加载时候 也要有动画
                >
                 <div>hellow</div>
                </CSSTransition>
                {/*<div className={this.state.show?'show':'hide'}>hellow</div>*/}
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