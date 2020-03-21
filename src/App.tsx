import React from 'react';
// 상태관리 모듈 및 파일
import { Provider } from 'react-redux';
import { store } from './store';
// Styling
import GlobalStyles from './Styles/GlobalStyle';
// history 관리
import { createBrowserHistory } from 'history';
// 외부 컴포넌트 및 모듈을 이용해 Router 관리 
import Router from './Router/Router';
import * as Module from 'react-router-dom';

const history = createBrowserHistory()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Module.Router history={history}>
        <Router />
      </Module.Router>
    </Provider>
  );
};

export default App;