import React from 'react';

import routes from './utils/route'
import './assets/main.scss'
import PrivateRoute from './utils/route/PrivateRoutes';

function App() {
  return (
    <PrivateRoute appRoutes={routes}/>
  );
}

export default App;
