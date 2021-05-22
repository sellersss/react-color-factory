import React from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';

function ColorDetail(props) {
  const color = useParams();
  let idx;
  let inColors = false;
  for (let i = 0; i < props.colors.length; i++) {
    if (props.colors[i].colorName === color.color) {
      idx = i;
      inColors = true;
      break;
    }
  }
  if (!inColors) {
    return <Redirect to='/colors' />
  }
  return (
    <div style={{ backgroundColor: `${props.colors[idx].color}` }}>
      <h1>{props.colors[idx].colorName}</h1>
      <Link exact to='/colors'>Go back</Link>
    </div>
  )
}

export default ColorDetail;