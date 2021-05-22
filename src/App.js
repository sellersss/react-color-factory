import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Colors from './Colors';
import ColorDetail from './ColorDetail';
import AddColor from './AddColor';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  function addColor(color) {
    setColors(colors => [color, ...colors])
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/colors'><Colors colors={colors} /></Route>
          <Route exact path='/colors/new'><AddColor addColor={addColor} /></Route>
          <Route exact path='/colors/:color'><ColorDetail colors={colors} /></Route>
          <Redirect to='/colors' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;