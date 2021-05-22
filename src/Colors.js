import React from 'react';
import { Link } from 'react-router-dom';


function Colors(props) {
  return (
    <div>
      <h3>Welcome to the color factory.</h3>
      <h2><Link exact to={`/colors/new`}>Add a color</Link></h2>
      <h4>Please select a color.</h4>
      {props.colors.map(color => <p><Link exact to={`/colors/${color.colorName}`}>{color.colorName}</Link></p>)}
    </div>
  )
}

export default Colors;