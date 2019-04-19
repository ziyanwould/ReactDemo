//UI组件 傻瓜式组件 只负责渲染 并不关注逻辑
//一般UI组件都可以用无状态组件
import React  from 'react';
import { Input,Button, List} from 'antd';

//无状态组件
const TodoListUI =  (props) =>{
 
        return(
            <React.Fragment>
            {/* <div>hellow world</div> */}
            <div style={{margin:'10px'}}>
                <Input 
                  placeholder="Basic usage"
                  value={props.inputValue}
                  style={{width:'300px',marginRight:'10px'}} 
                  onChange={props.handleInputChange}
                  />
                <Button onClick={props.handleBtnClick} type="primary">提交</Button>  
    
                <List style={{marginTop:'10px',width:'300px'}}
               
            
                bordered
                dataSource={props.list}
                renderItem={
                  // (items,index) => (<List.Item onClick={(item) =>{props.handleItemDelete( props.list.findIndex(item=> item=== items))}}>{items}</List.Item>)
                  (items,index) => (<List.Item onClick={() =>{props.handleItemDelete(index)}}>{items}</List.Item>)
                }
                />
            </div>
           
    
            </React.Fragment>
        )
    
}

//普通组件
// class TodoListUI extends Component {
//     render(){
//         return(
//             <React.Fragment>
//             {/* <div>hellow world</div> */}
//             <div style={{margin:'10px'}}>
//                 <Input 
//                   placeholder="Basic usage"
//                   value={this.props.inputValue}
//                   style={{width:'300px',marginRight:'10px'}} 
//                   onChange={this.props.handleInputChange}
//                   />
//                 <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>  
    
//                 <List style={{marginTop:'10px',width:'300px'}}
               
            
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//                 />
//             </div>
           
    
//             </React.Fragment>
//         )
//     }
// }

export default TodoListUI