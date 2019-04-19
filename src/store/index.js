import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk';
import  reducer from './reducer' 
//const store = createStore(reducer);
// 利用redux-logger打印日志
//import {createLogger} from 'redux-logger'

// 安装redux-devtools-extension的可视化工具。
//import { composeWithDevTools } from 'redux-devtools-extension'


// 使用日志打印方法， collapsed让action折叠，看着舒服。
//const loggerMiddleware = createLogger({collapsed: true});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
   
  );
export default  createStore(
    reducer,
    enhancer
    // composeWithDevTools()
    
);