import React from 'react'

const ColorComponent= ()=>{
  let divStyle = {
      width: 'auto',
      flexBasis: 80,
      margin: '15% 0'
    }

  const colorPalette = [
      "rgb(119,201,212)",
      "rgb(87,188,144)",
      "rgb(1,82,73)",
      "rgb(165,165,175)"
    ].map((color, i)=>{
    return <div key={i} style={{...divStyle, background: `${color}`}}>{color}</div>
  }) 

  const containerDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart'
  }

  return <div style={containerDivStyle}>{colorPalette}</div>
}

export default ColorComponent