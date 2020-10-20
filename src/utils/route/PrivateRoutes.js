import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";


const RenderRoute = props => {

  let { component: Component, children, location,admin,layout:Layout} = props;
  
  //let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ''
  // let decriptedToken = token && token.access_token ? getDecriptedToken(token.access_token) : '' 
  
  if(admin){
      return <Redirect to="/login" />;      
  }


  return (
    <Route
      exact
      path={location.pathname}
      render={reactRouterProps => {
        return (
          <ErrorBoundary>
            {Layout ? <Layout>
              <Component {...reactRouterProps} {...props} routes={children} />
            </Layout>:<Component {...reactRouterProps} {...props} routes={children} />}
           
          </ErrorBoundary>
        );
      }}
    />
  );
};

const PrivateRoute = props => (
  <Switch>
    {props.appRoutes.map((route, index) => (
      <RenderRoute key={index} {...route} />
    ))}
  </Switch>
);

export default PrivateRoute;
