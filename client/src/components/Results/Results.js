import React from 'react';
import { Columns, Column } from '../Grid';
import './Results.css';

const Results = (props) => {

  return (
    <Columns>
      <Column size="is-fullwidth buffer border">
        <h2>
          No results to display.
        </h2>
      </Column>
    </Columns>
  )
}

export default Results;
