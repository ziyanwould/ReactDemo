import {
    put,
    takeEvery
} from 'redux-saga/effects'
import {
    GET_INIT_LIST
} from './actionTYpes'
import {
    initListAction
} from './actionCreators'
import axios from 'axios'

//生成器函数的写法
 function* getInitList(){
    //yield   console.log('hello world')


       try{
        const  res = yield axios.get('/react/api/v1/article/todolist');
        const action = initListAction (res.data.data);
         yield put(action);
       }catch(e){
        console.log('网络请求出错')
       }


 }
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
  }

export default mySaga
    

