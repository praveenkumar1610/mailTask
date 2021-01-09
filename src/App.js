import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Home} from './Home'
import Signin from './signin/Signin';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signin/:id" component={Signin}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
