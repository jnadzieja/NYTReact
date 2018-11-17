import React from 'react';
import './TitleBar.css'
import { Column, Columns } from '../Grid';

const TitleBar = (props) => {

  return (
    <Columns>
      <Column size="is-fullwidth has-text-centered titlebarStyling shadow">
        <h1 className="title">
          New York Times Article Scrapper
        </h1>
        <p className="subtitle">
          Search and annotate articles of interest!
        </p>
      </Column>
    </Columns>
  )
}

export default TitleBar;
