### model

```
import { queryRule, removeRule, addRule } from '../services/api';

export default {
  namespace: 'rule',

  state: {
    data: {
      list: [],
      pagination: {},
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      /**
      params说明:
      	payload:传递过来的参数
      	call:执行一个异步函数,比如请求服务器的接口，返回一个promise
      	put:执行一个action
      */
      const response = yield call(queryRule, payload);
      yield put({
        type: 'save',	//执行自身模块的action不用加命名空间
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,		//解构的方式来合并state
        data: action.payload,
      };
    },
  },
};


```
