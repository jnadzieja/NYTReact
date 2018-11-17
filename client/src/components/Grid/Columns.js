import React from 'react';

export const Columns = (props) => {

  return (
    <div className={"columns " + props.extras}>
      {props.children}
    </div>
  )
}
