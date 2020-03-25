import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from 'Containers/Auth/MainContainer/MainContainer';
import LoginContainer from 'Containers/Auth/LoginContainer/LoginContainer';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/regist" component={() => <div>회원가입 페이지</div>} />
      <Route exact path="/home" component={() => <div>메인 페이지</div>} />
      <Route exact path="/laptop" component={() => <div>노트북 대여 페이지</div>} />
      <Route exact path="/notice" component={() => <div>공지사항 페이지</div>} />
      <Route exact path="/notice/write" component={() => <div>공지사항 작성 페이지</div>} />
    </Switch>
  );
};

export default Router
