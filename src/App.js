import React,{ Component} from 'react'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import './style.css'
class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            list:[]
        }
        this.handleItem= this.handleItem.bind(this)
    }
    render(){

        return(
            <React.Fragment>
                  <TransitionGroup >
                {
                   this.state.list.map((item,index) =>{
                       return(
                        <CSSTransition
                       
                        timeout={1000}
                        classNames='fade'
                        unmountOnExit
                        onEntered={(el) => {el.style.color='blue'}}//钩子函数 在某个时刻自动执行的函数 比如onEntered是当入场动画执行后
                        appear={true}//第一次加载时候 也要有动画
                        key={index}
                       >
                       <div >{item}</div>
                         </CSSTransition>
                           
                       )
                   })
                }
              
              
                <button onClick={this.handleItem}>toggle</button>
                </TransitionGroup>
            </React.Fragment>
        ) 
    }
    handleItem(){
     this.setState((prevState) => {
         return{
             list : [...prevState.list,'item']
         }
     })
    }
}

export default App;