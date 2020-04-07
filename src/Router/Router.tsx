import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from 'Containers/Auth/MainContainer/MainContainer';
import LoginContainer from 'Containers/Auth/LoginContainer/LoginContainer';
import RegistContainer from 'Containers/Auth/RegistContainer/RegistContainer';
import MainTemplate from 'Containers/Template/MainTemplate/MainTemplate';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/regist" component={RegistContainer} />
      <Route exact path="/home" component={MainTemplate} />
      <Route exact path="/laptop" component={MainTemplate} />
      <Route exact path="/notice" component={MainTemplate} />
      <Route exact path="/notice/write" component={() => <div>공지사항 작성 페이지</div>} />
    </Switch>
  );
};

export default Router
