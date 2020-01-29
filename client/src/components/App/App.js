import {Route} from 'react-router-dom'
import React, {Component} from 'react';

const App = ({children}) => (
  <Route

    render={(props) => {
      return (
          <div>
                {children}
          </div>

      );
    }}
  />
);

export default App;
