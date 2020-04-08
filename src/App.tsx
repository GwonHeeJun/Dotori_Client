import React, { useState } from 'react';
// 상태관리 모듈 및 파일
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import * as Module from 'react-router-dom';
import ReactiveContainer from 'Containers/ReactiveContainer/ReactiveContainer';
import { store } from './store';
// Styling
import Theme from './Styles/Theme';
// history 관리
// 외부 컴포넌트 및 모듈을 이용해 Router 관리
import Router from './Router/Router';
// 스크린 크기로 인해 볼수 없다는 것을 경고

const history = createBrowserHistory()

const App: React.FC = () => {
  const [isReactiveWidth, setIsReactiveWidth] = useState(true)
  const [isReactiveHeight, setIsReactiveHeight] = useState(true)

  setInterval(() => {
    document.body.clientWidth >= 1550 ? setIsReactiveWidth(true) : setIsReactiveWidth(false);
    document.body.clientHeight >= 950 ? setIsReactiveHeight(true) : setIsReactiveHeight(false);
  }, 500);

  return (
    isReactiveWidth && isReactiveHeight ?
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <Module.Router history={history}>
            <Router />
          </Module.Router>
        </ThemeProvider>
      </Provider> : <ReactiveContainer />
  );
};

export default App;
