import React from 'react';

export const Column = (props) => {

  return (
    <div className={"column " + props.size}>
      {props.children}
    </div>
  )
}
