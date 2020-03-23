
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <div>main</div>} />
      <Route exact path="/home" component={() => <div>home</div>} />
    </Switch>
  );
};

export default Router
