// 상태를 관리 하기 위한 모듈 및 파일들
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from './Reducers';
// API를 관리 및 가공하기 위해 사용하는 모듈 및 파일들
import { rootSaga } from './Sagas';

// 기존에 정의되어있던 Window Interface를 확장
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Redux-saga를 사용하기 위한 sagaMiddleware 설정
const sagaMiddleware = createSagaMiddleware();

// Redux DevTools를 사용하기 위한 compose 설정
const composeEnhancer = (process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

// Redux의 Reducer와 Redux-Saga의 MiddleWare를 연결
export const store = createStore(
  rootReducers,
  {},
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);

// Redux-Saga 실행
sagaMiddleware.run(rootSaga);
